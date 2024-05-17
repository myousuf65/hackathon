import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

async function run(_prompt) {

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = _prompt;

  const result = await model.generateContent(prompt);
  
  const response =  result.response;
  const text = response.text();
  console.log(text);
}

run();

