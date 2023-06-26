import { db } from "./dbConnect.js";
const coll = db.collection('jewelry');

 const toArray = (collection) => collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))

 export async function getAllJewelry(req, res) {
    try {
        const allJewelry = await coll.get();
        res.send(toArray(allJewelry));
    } catch(err) {
        res.status(500).send(err);
    }
 }

 export async function addNewJewelry(req, res) {
    try {
        const newJewelry = req.body;
        await coll.add(newJewelry);
        getAllJewelry(req,res);
    } catch(err) {
        res.status(500).send(err);
    }
 }

 export async function updateJewelryByID(req,res) {
    try {
        const { jewelryId } = req.params;
        const updateInfo = req.body;
        await coll.doc(jewelryId).update(updateInfo);
        getAllJewelry(req, res);
    } catch(err) {
        res.status(500).send(err)
    }
 }