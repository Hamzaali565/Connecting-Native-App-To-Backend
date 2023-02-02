import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://192.168.18.175:19000"],
    port: 19000,
    // credentials: true,
  })
);

let NewUserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const userModels = mongoose.model("user", NewUserSchema);

app.post("/send-data", async (req, res) => {
  // console.log(req);

  // res.send('finsh');
  // return false;
  try {
    const body = await req.body;
    if (!body.email) throw new Error("Email Is required");
    if (!body.password) throw new Error("Password is required");
    if (body.password.length < 8)
      throw new Error("Password Should be greater than 8 Characters");
    req.body.email = req.body.email.toLowerCase();
    const DB = userModels.findOne({ email: body.email }, (err, user) => {
      if (!err) {
        if (user) {
          res.status(500).send({ message: "User Already Exist" });
          return;
        }
        const create = userModels.create(
          {
            email: body.email,
            password: body.password,
          },
          (err, saved) => {
            if (!err)
              res.status(200).send({ message: "Your Data is Submitted" });
            console.log(saved);
          }
        );
      } else throw new Error("Server Error");
    });
  } catch (error) {
    res.status(400).send({
      message: `${error}`,
    });
    console.log(error);
  }
});

app.get("/datas", async (req, res) => {
  const datas = userModels.find({}, (err, data) => {
    if (!err) {
      if (data) {
        res.status(200).send({ message: "Nice Response", data });
      }
    } else {
      res.status(500).send({ message: "Server Error" });
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const deleteData = userModels.deleteOne({ _id: id }, (err, dataDeleted) => {
    if (!err) {
      if (dataDeleted.deletedCount !== 0) {
        res.status(200).send({
          message: "Data Deleted Successfully",
        });
      } else {
        res.status(404).send({
          message: "Data not Found please try later",
        });
      }
    } else {
      res.status(500).send({
        message: "Server Error",
      });
    }
  });
});

app.put("/edit/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (!body.email || !body.password) {
    res.status(400).send({ message: "Required parameters are missing" });
    return;
  }
  if (body.password.length < 8) {
    res.status(400).send({ message: "Length of password should be 8" });
    return;
  }
  try {
    let update = userModels
      .findByIdAndUpdate(
        id,
        {
          email: body.email,
          password: body.password,
        },
        { new: true }
      )
      .exec();
    res.status(200).send({ message: "Data Updated Successfully" });
  } catch (error) {
    res.status(500).send({
      massage: "Server error",
    });
  }
});
// Database
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongodbURI =
  process.env.mongodbURI ||
  "mongodb+srv://CRUD:hamzaali565@cluster0.kh990zg.mongodb.net/postings?retryWrites=true&w=majority";
/////////////////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(mongodbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Database is connected");
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
