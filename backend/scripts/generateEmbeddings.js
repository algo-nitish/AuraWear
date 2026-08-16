import mongoose from 'mongoose';
import 'dotenv/config';
import productModel from '../models/productModel.js';
import { generateEmbedding } from '../utils/embedding.js';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
        console.log("DB Connected to e-commerce");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};

const run = async () => {
    await connectDB();
    const products = await productModel.find({});
    console.log(`Found ${products.length} products.`);

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.embedding && product.embedding.length > 0) {
            console.log(`[${i+1}/${products.length}] Skipping ${product.name} (already has embedding)`);
            continue;
        }

        console.log(`[${i+1}/${products.length}] Generating embedding for ${product.name}...`);
        const textToEmbed = `${product.name}. ${product.category} ${product.subcategory}. ${product.description}`;
        const embedding = await generateEmbedding(textToEmbed);
        
        if (embedding.length > 0) {
            product.embedding = embedding;
            await product.save();
            console.log(`  -> Saved embedding (${embedding.length} dims)`);
        } else {
            console.log(`  -> Failed to generate embedding`);
        }
    }

    console.log("Finished generating embeddings.");
    process.exit(0);
};

run();
