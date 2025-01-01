const express =  require("express");
const mongoose = require("mongoose");
const cors=require("cors");

const formModel=require("./models/formdetails")
const multer=require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,uniqueSuffix+file.originalname);                                                                                                                                                                                                                       
    }
  })
  const upload = multer({ storage: storage })
const EmployeeModel=require("./models/Employee")
const ResultsModel=require("./models/Results");
const { Result } = require("postcss");
const FormModel = require("./models/formdetails");
const app=express();
const port =3000;
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");
app.post('/reg',(req,res) => {
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json())
})
app.post('/result',(req,res) => {
    ResultsModel.create(req.body)
    .then(results=>res.json(results))
    .catch(err=>res.json())
})

app.get("/results", (req, res) => {
    ResultsModel.find()
        .then(results => {
            res.json(results);  // Send results as a JSON response
        })
        .catch(err => {
            res.status(500).json({ message: "Error fetching results", error: err });
        });
});
app.get("/admindetails", (req, res) => {
    FormModel.find()
        .then(results => {
            res.json(results);  // Send results as a JSON response
        })
        .catch(err => {
            res.status(500).json({ message: "Error fetching results", error: err });
        });
});
app.patch("/update-verified/:adhaarNumber", (req, res) => {
    const { adhaarNumber } = req.params;

    FormModel.findOneAndUpdate(
        { adhaarNumber: adhaarNumber },
        { verified: true },
        { new: true }
    )
        .then((updatedDocument) => {
            if (!updatedDocument) {
                return res.status(404).json({ message: "Record not found" });
            }
            res.json({ message: "Verified successfully", updatedDocument });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error updating verified status", error: err });
        });
});

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("Success");
            }
            else{
                res.json("the password is incorrect");
            }
        }
        else{
            res.json("No record exists")
        }
  

    })
})

app.post(
    "/upload-files",
    upload.fields([
        { name: "adhaar", maxCount: 1 },
        { name: "twelve", maxCount: 1 },
        { name: "eleventh", maxCount: 1 },
    ]),
    (req, res) => {
        if (!req.files) {
            return res.status(400).json({ message: "No files uploaded" });
        }

        const { name, age, adhaarNumber, address, date } = req.body;

        // Extract filenames from the uploaded files
        const fileData = {
            verified:false,
            adhaar: req.files.adhaar ? req.files.adhaar[0].filename : null,
            twelve: req.files.twelve ? req.files.twelve[0].filename : null,
            eleventh: req.files.eleventh ? req.files.eleventh[0].filename : null,
        };

        const formDetails = {
            name,
            age,
            adhaarNumber,
            address,
            date,
            ...fileData, // Merge file data
        };

        // Save the form details to the database
        formModel.create(formDetails)
            .then((form) => res.status(200).json({ message: "Form submitted successfully", form }))
            .catch((err) => res.status(500).json({ message: "Error saving form", error: err }));
    }
);



// app.post(
//     "/upload-files",
//     upload.fields([
//         { name: "adhaar", maxCount: 1 },
//         { name: "twelve", maxCount: 1 },
//         { name: "eleventh", maxCount: 1 },
//     ]),
//     (req, res) => {
//         console.log(req.body);
//         console.log("Adhaar:", req.files.adhaar);
//         console.log("12th Marksheet:", req.files.twelve);
//         console.log("10th Marksheet:", req.files.eleventh);

//         if (!req.files) {
//             return res.status(400).send("No files uploaded");
//         }

//         res.status(200).json({
//             message: "Files uploaded successfully",
//             files: req.files,
//         });
//         formModel.create(req.body)
//         .then(employees=>res.json(employees))
//         .catch(err=>res.json())
//     }

// );


app.get("/",(req,res)=>{
    console.log("Hello world");
})
app.post("/checkadmin",(req,res)=>{
    const {user,pass} = req.body;
    console.log(user);
    if((user == "admin") && (pass=="pass")){
        res.json("success");
    }
    else{
        res.json("hello world");
    }
});
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});