import Cadastro from '../schema/cadastro.js';

class CadastroRepository {
    constructor() {
        this.model = Cadastro;
    }

    // Method to save a new DemoDummy to the database
    async save(data) {
        try {
            const model = new this.model(data);
            await model.save();
            return await this.findByName(data.name);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // Method to find a DemoDummy by name
    async findByName(name) {
        try {
            return this.model.findOne({name: name}, null, null);
        } catch (err) {
            throw new Error(err.message);
        }
    }

}

export default CadastroRepository;
