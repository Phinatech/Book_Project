import mongoose from "mongoose";

interface books {
    author:string;
    title:string;
    coverImage:string;
    summary:string;
    ISBN:string;
    views:[];
    authorImg:string;
    category:string;
}

interface ibooks extends books,mongoose.Document{}

const Booksschema = new mongoose.Schema({
     author:String,
    title:String,
    coverImage:String,
    summary:String,
    ISBN:String,
    views:[],
    authorImg:String,
    category:String,
});

const bookstoreModel = mongoose.model<ibooks>("Mybooks",Booksschema)

export default bookstoreModel