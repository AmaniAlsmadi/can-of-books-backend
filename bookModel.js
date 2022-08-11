const mongoose = require('mongoose');
const bookSchema = require('./schema');
const BookModel = mongoose.model('BookModel',bookSchema);

const agatha = new BookModel ({
  title:"And Then There Were None",
  description:"When 10 strangers gather at a mansion, they discover they are systematically being murdered as described in an eerie poem framed in every room of the home. The guests must figure out who is behind the murders before everyone is killed.",
  status:true
});
const agatha2 = new BookModel ({
  title:"Murder on the Orient Express",
  description:"By morning, an American man is found stabbed to death in his compartment, locked from the inside: A mystery only Hercule Poirot can solve." ,
  status:true
});
const agatha3 = new BookModel ({
  title:"The Mysterious Affair at Styles",
  description:"This book introduces readers to Hercule Poirot, a Belgian detective and World War I refugee, who begins to investigate when his benefactor is mysteriously poisoned and it seems nearly everyone is a suspect." ,
  status:true
});
const agatha4 = new BookModel ({
  title:"The Murder of Roger Ackroyd",
  description:"When an English widow and her fiance are both killed within 24 hours, Poirot must unravel the tangled mystery in this clever and thrilling tale." ,
  status:true
});
//agatha.save();
//agatha2.save();
//agatha3.save();
//agatha4.save();

module.exports = BookModel