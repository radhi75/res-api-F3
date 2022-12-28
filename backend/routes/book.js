const express = require("express");
const {
  GetBook,
  AddBook,
  DeleteBook,
  EditBook,
  GetOneBook,
} = require("../controlles/book");

const bookRoute = express.Router();

bookRoute.get("/all", GetBook);
bookRoute.post("/add", AddBook);
bookRoute.delete("/del/:id", DeleteBook);
bookRoute.put("/edit/:id", EditBook);
bookRoute.get("/:id", GetOneBook);
module.exports = bookRoute;
