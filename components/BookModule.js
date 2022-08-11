
const BookModel =require ('../bookModel')

async function handleBook (req,res) {
  BookModel.find({},(error,data)=>{
    if(error) console.log(`error from the db: ${error}`);
    else res.send(data);

  })
}

module.exports = handleBook;