import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs"
import dotenv from "dotenv"

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API)


function fileToGenerativePart(path, mimeType){
  return {
    inlineData :{
      data : Buffer.from(fs.readFileSync(path).toString("base64")),
      mimeType
    }
  }
}

async function run(){
  const model = genAI.getGenerativeModel({model : "gemini-pro-vision"});

  const prompt = _prompt;

  const imageParts = [fileToGenerativePart("path", "image/jpeg")];

  const result = await model.generateContent([prompt, ...imageParts]);

  const response = result.response;

  const text = response.text();

  console.log(text);
}
