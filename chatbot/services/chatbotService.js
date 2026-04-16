const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.API_KEY,
});

exports.getBotReply = async (message) => {
  try {
    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-120b", // free & fast
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message }
      ],
    });

    return completion.choices[0].message.content;

  } catch (err) {
    console.log("GROQ ERROR:", err.message);
    return "Error from AI";
  }
};