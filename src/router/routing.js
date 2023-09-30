const expres = require("express");
const router = expres.Router();
const Contactmodel = require("../model/contact");


router.post("/add", async (req, res) => {
    let { name, email, subject, message } = req.body;
    try {
        const contactdata = new Contactmodel({ name, email, subject, message });
        const adddata = await contactdata.save();
        res.status(200).send(adddata);
    }
    catch (e) {
        res.status(400).send(e);
        res.json({ "message": true });
    }


});

router.get("/getdata", async (req, res) => {
    try {
        const getdata = await Contactmodel.find();
        res.status(200).send(getdata);
    }
    catch (e) {
        res.status(400).send(e);

    }
})

router.get("/getdata/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getdata = await Contactmodel.findById(_id);
        res.status(200).send(getdata);
    }
    catch (e) {
        res.status(400).send(e);

    }
})


router.delete("/delete/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const deletedata=await Contactmodel.findByIdAndDelete(_id);
        res.status(200).send(deletedata);

    }
    catch(e)
    {
        res.status(400).send(e);

    }

})

router.patch("/update/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const updatedata=await Contactmodel.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updatedata);

    }
    catch(e)
    {
        res.status(400).send(e);
    }
})

module.exports = router;