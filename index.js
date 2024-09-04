require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const MODEL_MAP = {
  groq: {
    providerSlug: "groq",
    model: "mixtral-8x7b-32768",
    apiKey: process.env.GROQ_API_KEY,
  },
  together: {
    providerSlug: "together-ai",
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    apiKey: process.env.TOGETHER_API_KEY,
  },
};

app.get("/", (_req, res) => {
  res.render("index");
});

app.post("/ask", async (req, res) => {
  const { question, model } = req.body;
  const modelInfo = MODEL_MAP[model];

  if (!modelInfo) {
    return res.status(400).json({ error: "Model not found" });
  }

  const { providerSlug: provider, apiKey, model: modelName } = modelInfo;
  const data = {
    model: modelName,
    messages: [{ role: "user", content: question }],
  };

  try {
    const url = `${process.env.GATEWAY_URL}/v1/chat/completions`;
    const response = await axios.post(url, data, {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "x-portkey-provider": provider,
      },
    });

    res.render('index', { response: `${response.data.choices[0].message.content}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
