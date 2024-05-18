import OpenAI from "openai";
import dotnv from "dotenv"


dotnv.config()

const openai = new OpenAI({
  apiKey: process.env['OPEN_AI_SECRET_KEY'],
  organization: process.env['ORG_ID']
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo-0125',
  });
  //
  // console.log(chatCompletion.data.choi)
}

main();
