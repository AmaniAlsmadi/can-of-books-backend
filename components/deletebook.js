async function deleteBook (req,res) {


    const id = req.params._id;
    BookModel.findByIdAndDelete(id).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })

}

module.exports = deleteBook;