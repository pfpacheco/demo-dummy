import {v4 as uuidv4} from 'uuid';
import CadastroService from "../service/cadastro_service.js";

class CadastroController {
    constructor() {
        this.demoDummyService = new CadastroService();
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
            throw new Error(err.message);
        }
    }
}

export default CadastroController;