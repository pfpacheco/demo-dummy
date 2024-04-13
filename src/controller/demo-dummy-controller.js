import {v4 as uuidv4} from 'uuid';
import DemoDummyService from "../service/demo-dummy-service.js";

class DemoDummyController {
    constructor() {
        this.demoDummyService = new DemoDummyService();
    }

    async save(req) {
        const body = req.body;
        try {
            const data = {
                _id: uuidv4(),
                name: body.name,
                cnu: body.cnu,
                demo_field: body.demo_field,
            };
            return await this.demoDummyService.save(data);
        } catch (err) {
            console.log(`Error on controller: ${err}`);
        }
    }
}

export default DemoDummyController;