import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js'
import { generateEmbedding, cosineSimilarity } from '../utils/embedding.js'

// function for add product
const addProduct = async (req, res) => {
    try {        
      const { name, description, category, price, subcategory, bestseller, sizes } = req.body

      const image1 = req.files.image1 &&  req.files.image1[0]
      const image2 = req.files.image2 &&  req.files.image2[0]
      const image3 = req.files.image3 &&  req.files.image3[0]
      const image4 = req.files.image4 &&  req.files.image4[0]

      const  images = [image1, image2, image3, image4].filter((item) => item !== undefined )

      const imagesUrl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
          return result.secure_url
        })
      );
     
      // Generate embedding for AI search
      const textToEmbed = `${name}. ${category} ${subcategory}. ${description}`;
      const embedding = await generateEmbedding(textToEmbed);

      const productData = {
        name,
        description,
        category,
        price: Number(price),
        subcategory,
        bestseller: bestseller === "true" ? true : false,
        sizes: JSON.parse(sizes),
        image: imagesUrl,
        date: Date.now(),
        embedding: embedding
      }

      console.log(productData);

      const product = new productModel(productData);
      await product.save()

      res.json({ success: true, message: 'Product Added successfully' });
      
    } catch (error) {
      console.log(error);
      res.json({success:false, message: error.message})
    }
 
}


// function for List product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
  }
}



// function for removing product
const removeProduct = async (req,res) => {
   try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: 'Product removed successfully' });
   } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
  }
}




// function for single product info
const singleProduct = async (req,res) => {
  try {  
    const {productId} = req.body
    const product = await productModel.findById(productId)
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
  }
}

// function for smart semantic search
const smartSearch = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.json({ success: false, message: 'Query is required' });
    }
    
    const queryEmbedding = await generateEmbedding(query);
    if (!queryEmbedding || queryEmbedding.length === 0) {
      return res.json({ success: false, message: 'Failed to generate embedding' });
    }

    const products = await productModel.find({});
    
    // Calculate cosine similarity for all products
    const productsWithScores = products.map(product => {
      let score = 0;
      if (product.embedding && product.embedding.length > 0) {
        score = cosineSimilarity(queryEmbedding, product.embedding);
      }
      return { product, score };
    });

    // Sort by score descending and return top 20 matches with a reasonable threshold
    const sortedProducts = productsWithScores
      .filter(p => p.score > 0.2) // Filter out completely irrelevant stuff
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map(p => p.product);

    res.json({ success: true, products: sortedProducts });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}


export {listProducts, addProduct, removeProduct, singleProduct, smartSearch}