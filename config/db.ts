import mongoose from "mongoose"
const URI = "mongodb://localhost/bookstore"
const lifeURI =
  "mongodb+srv://SeraphinaDB:Judy200deo20@cluster0.59l2guk.mongodb.net/Judith_book_stores?retryWrites=true&w=majority";

mongoose.connect(lifeURI)
mongoose.connection.on("open",()=>{
    console.log("Database connected")
})

.once("error",()=>{
console.log("An error occure while getting database")
})

