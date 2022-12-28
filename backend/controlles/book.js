const book = require("../models/book");

exports.GetBook = async (req, res) => {
  try {
    const books = await book.find();
    res.status(200).send({ msg: "list of book", books });
  } catch (error) {
    res.status(500).send("couldn't get");
  }
};

exports.AddBook = async (req, res) => {
  try {
    const books = new book(req.body);
    await books.save();
    res.status(200).send({ msg: "added", books });
  } catch (error) {
    res.status(500).send("couldn't add");
  }
};
exports.DeleteBook = async (req, res) => {
  try {
    await book.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "deleted" });
  } catch (error) {
    res.status(500).send("couldn't delete");
  }
};
exports.EditBook = async (req, res) => {
  try {
    const books = await book.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "updated book", books });
  } catch (error) {
    res.status(500).send("couldn't update");
  }
};
exports.GetOneBook = async (req, res) => {
  try {
    const books = await book.findById(req.params.id);
    res.status(200).send({ msg: "one book", books });
  } catch (error) {
    res.status(500).send("couldn't get one");
  }
};
