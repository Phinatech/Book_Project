import {Router} from "express";
import { Deleting, Getall, myiews, PostBooks, Searching } from "../controller/bookController"
import { coverUploader } from "../config/multer"

const bookrouter = Router()

bookrouter.route("/CreatingBooks").post(coverUploader, PostBooks);
bookrouter.route("/gettingbooks").get(Getall)
bookrouter.route("/updating").patch(myiews)
bookrouter.route("/searchingData").get(Searching)
bookrouter.route("/deleting/:id").delete(Deleting)


export default bookrouter