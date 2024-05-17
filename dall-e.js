import OpenAI from "openai";
import dotenv from 'dotenv'

dotenv.config()


const openai = new OpenAI({
  apiKey: process.env['OPEN_AI_SECRET_KEY'], // This is the default and can be omitted
});

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: "a white siamese cat",
  n: 1,
  size: "1024x1024",
});
image_url = response.data[0].url;
