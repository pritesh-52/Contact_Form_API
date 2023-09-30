const moonngose=require("mongoose");
moonngose.connect("mongodb://127.0.0.1:27017/contactform").then(()=>{
    console.log("Connect");
})
.catch((e)=>{
    console.log(e);
})