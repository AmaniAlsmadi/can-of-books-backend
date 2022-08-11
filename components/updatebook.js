const BookModel =require ('../bookModel')

async function updateBook (req,res) {

    const id = req.params.id;
    const {data} = req.body;

    BookModel.findByIdAndUpdate(id, data, {new: true}).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })
}

module.exports = updateBook;