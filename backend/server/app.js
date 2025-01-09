const express =  require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const jwt = require('jsonwebtoken');
const SECRET_KEY = "hello_world";
const profileModel=require("./models/profile.js")
const formModel=require("./models/formdetails")
const WalletModel=require("./models/wallet.js")
const multer=require("multer");
const path = require("path");


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
app.use("/files", express.static(path.join(__dirname, "files")));

mongoose.connect("mongodb://localhost:27017/employee");
app.post('/reg',(req,res) => {
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json())
});
app.post("",(req,res)=>{
      
})
app.post('/result',(req,res) => {
    ResultsModel.create(req.body)
    .then(results=>res.json(results))
    .catch(err=>res.json())
})
app.post('/refillwallet',(req,res) => {
    WalletModel.create(req.body)
    .then(results=>res.json(results))
    .catch(err=>res.json())
})

app.get("/results", (req, res) => {
    ResultsModel.find()
        .then(results => {
            res.json(results);  
        })
        .catch(err => {
            res.status(500).json({ message: "Error fetching results", error: err });
        });
});

app.get("/wallet", (req, res) => {
    WalletModel.find()
        .then(results => {
            res.json(results); 
    
        })
        .catch(err => {
            res.status(500).json({ message: "Error fetching results", error: err });
        });
});
app.get("/admindetails", (req, res) => {
    FormModel.find()
        .then(results => {
            res.json(results);  
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

const ensureAuthentication=(req,res,next)=>{
    const auth=req.headers["authorization"];
    if(!auth){
        return res.status(403)
        .json({message:"Unauthorized JWT Token"})
    }
    try{
    const decoded=jwt.verify(auth,"hello_world");
    req.user=decoded;
    next();
    }
    catch(err){
        return res.status(403)
        .json({message:"Unauthorized JWT Token wrong or expired"});
    }
}

app.get("/dash",ensureAuthentication,(req,res)=>{
    console.log(req.user);
})

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '24h' });
                console.log(token);
                res.json({ 
                    success:true,
                    message:"Login Successfull",
                    email:user.email,
                    jwttoken:token 
                });
  
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
        console.log(req.body);
        const { name, age, adhaarNumber, address, date } = req.body;

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

app.post("/profile-update",upload.single("profile"),(req,res)=>{
    if (!req.file) {
        return res.status(400).json({ message: "No files uploaded" });
    }
    const profileData = {
        profile: req.file ? req.file.filename : null,
        ...req.body
      }
      console.log(req.file);
      console.log(profileData);
      profileModel.create(profileData)
      .then((form) => res.status(200).json({ message: "Form submitted successfully", form }))
      .catch((err) => res.status(500).json({ message: "Error saving form", error: err }));

    
})



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
        res.json("invalid");
    }
});



app.get("/wallet/:email", (req, res) => {
    const { email } = req.params;
    console.log(email);
    WalletModel.findOne({ email: email })
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ message: "Profile not found" });
        }
        res.json({
           money:profile.money// Serve the image using a relative path
        });
      })
      .catch((err) => res.status(500).json({ message: "Error fetching profile", error: err }));
  });

app.get("/profile/:email", (req, res) => {
    const { email } = req.params;
    console.log(email);
    profileModel.findOne({ email: email })
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ message: "Profile not found" });
        }
        res.json({
          firstname: profile.firstname,
          lastname: profile.lastname,
          profileImage: `/files/${profile.profile}` // Serve the image using a relative path
        });
      })
      .catch((err) => res.status(500).json({ message: "Error fetching profile", error: err }));
  });

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});