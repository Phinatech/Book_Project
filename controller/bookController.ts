import express,{query, Request,Response} from "express"
import bookstoreModel from "../model/bookModel"
import cloudinary from "../config/cloudinary"

const PostBooks =async (req:Request,res:Response):Promise<Response> => {
    try {
        const cloudimg = await cloudinary.uploader.upload(req?.file!.path)
        const {author,title,coverImage,summary,ISBN,views,authorImg,category} = req.body
        const isbn1 = Math.floor(Math.random()*10000)
        const isbn2 = Math.floor(Math.random()*10000)
        const isbn3 = Math.floor(Math.random()*10000)
        const isbn4 = Math.floor(Math.random()*10000)

        const newBookk = await bookstoreModel.create({
          author,
          title,
          coverImage: cloudimg.secure_url,
          summary,
          ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}-`,
          views,
          authorImg:author.charAt(0).toUpperCase() ,
          category,
        });
        return res.status(200).json({
            message:"Data gotten",
            data:newBookk
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            message:"An error occured",
            data:error
        })
    }
};

const Getall =async (req:Request,res:Response):Promise<Response> => {
    try {
        const gettingData = await bookstoreModel.find()
        return res.status(201).json({
          message: "All data has been gotten successfully",
          data: gettingData,
        });
        
    } catch (error) {
        return res.status(404).json({
          message: "An error occured",
        }); 
    }
};

const Searching =async (req:Request,res:Response):Promise<Response> => {
    try {
        const queryData = req.query
        const querySearch = await bookstoreModel.find(queryData)

        return res.status(200).json({
            message:"datagotten",
            data:querySearch
        })

    } catch (error) {
         return res.status(404).json({
           message: "An error occured",
         });
    }
};

const myiews =async (req:Request,res:Response):Promise<Response> => {
    try {
        const newView = await bookstoreModel.findByIdAndUpdate(req.params.id,{
$push:{views:req.body.ip},
        },{new:true});

        return res.status(200).json({
           data: newView
        });

    } catch (error) {
        return res.status(404).json({
          message: "An error occured",
        });
    }
};

const Deleting =async (req:Request,res:Response):Promise<Response> => {
    try {
        const DeleteData = await bookstoreModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message:"Data Delted Successfully",
            data:DeleteData
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"An error occured while deleting this data",
        })
    }
}

export {PostBooks,Getall,Searching,myiews,Deleting}
