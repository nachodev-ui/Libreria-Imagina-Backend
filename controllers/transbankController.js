// controllers/transbankController.js

const transbankService = require("../services/transbank/transbankService");

exports.createTransaction = async (req, res) => {
  try {
    const response = await transbankService.createTransaction(req.body)
    res.json(response.data);
  } catch (error) {
    res.json(error.response.data);
  }
};

exports.putTransactionStatus = async (req, res) => {
  try {
    const response = await transbankService.putTransactionStatus(
      req.params.token
    );
    res.json(response.data);
  } catch (error) {
    res.json(error.response.data);
  }
};

exports.getTransaction = async (req, res) => {
  try {
    const response = await transbankService.getTransaction(req.params.token);
    res.json(response.data)
  } catch (error) {
    res.json(error.response.data)
  }
};
