const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_SECRET,
});
const openai = new OpenAIApi(configuration);
console.log("openaI-----------------------------", openai);

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if (data) {
      console.log("data---", data);
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log("ERROR----------", err.message);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a detail paragraph about \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log("ERRORRRRR-------", err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.chatbotController = async () => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Complete this sentence: \n${text}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    if (data) {
      console.log("data---", data);
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (error) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.jsConverterController = async () => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `convert these instruction into javascript code \n${text}`,
      max_tokens: 400,
      temperature: 0.25,
    });
    if (data) {
      console.log("data---", data);
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (error) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.imageController = async () => {
  try {
    const { text } = req.body;
    const { data } = await openai.createImage({
      prompt: `generate a scifi image of \n${text}`,
      n: 1,
      size: "512x512",
    });
    if (data) {
      console.log("data---", data);
      if (data) {
        return res.status(200).json(data.data[0].url);
      }
    }
  } catch (error) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
