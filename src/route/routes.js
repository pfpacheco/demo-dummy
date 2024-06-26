import express from "express";
import DemoDummyController from "../controller/demo-dummy-controller.js";

const router = express.Router();
const demoDummyController = new DemoDummyController();

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    return res.render("index.html");
});

router.post('/rest/api/demo/dummy/save', async (req, res) => {
    const message = await demoDummyController.save(req, res);
    res.header('Content-Type', 'application/json');
    return res.end(JSON.stringify(message));
})

export default router;