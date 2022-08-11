async function findBooksById (req,res) {

    const id = req.params.id;
    BookModel.find({ "_id": id}, (error, data) => {
        if (error) console.log(`error finding the books in the db: ${error}`);
        else res.send(data[0]);
    })   
}

module.exports =findBooksById;