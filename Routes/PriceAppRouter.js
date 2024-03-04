// create vendor list logic 
import express from "express";
import Vendor from "../models/Vendor.js";
const router = express.Router();

// create vendor list
// router.post("/", (req, res) => {
//     const { name, product, city, contact } = req.body;

// }
router.post('/createvendor', async function (req, res) {
    try {
        const { name, product, city, contact } = req.body;
        const vendor = await Vendor.create({ name, product, city, contact })
        if (!vendor) return res.status(400).send("Vendor not created");
        return res.status(200).send(vendor)

    } catch (error) {
        console.log(error);
    }
})

//get vendor list
router.get('/getvendor', async function (req, res) {
    try {
        const vendor = await Vendor.find();
        if (!vendor) return res.status(400).send("Vendor not found");
        return res.status(200).send(vendor)
    } catch (error) {
        console.log(error)
    }
})

export default router;