const BookModel =require ('../bookModel')

async function addNewBook (req,res) {

    const {newbook} = req.body;
    const bookNew = new CatModel(newbook);
    bookNew.save();
    res.status(201).json(bookNew);
}

module.exports = addNewBook; 