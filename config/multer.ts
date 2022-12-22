import multer from "multer";
import{Request} from "express"
import { createBrotliCompress } from "zlib";


type Destinationcallback = (error:Error | null, destination:string)=>void
type filenamecallback =(error:Error | null , filename:string)=>void
const desstorage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: Destinationcallback
  ) => {
    cb(null, "uploads");
  },

  filename(req: Request, file: Express.Multer.File, cb: filenamecallback) {
    cb(null,file.originalname)
  },
});

const coverUploader = multer({storage:desstorage}).single("coverImage")
export  {coverUploader}