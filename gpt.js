import OpenAI from "openai";
import dotnv from "dotenv"


dotnv.config()

const openai = new OpenAI({
  apiKey: process.env['OPEN_AI_SECRET_KEY'], // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
}

main();

