import DemoDummySchema from '../schema/demo-dummy-schema.js';

class DemoDummyRepository {
    constructor() {
        this.model = DemoDummySchema;
    }

    // Method to save a new DemoDummy to the database
    async saveDemoDummy(data) {
        try {
            const model = new this.model(data);
            await model.save();
            return await this.findDemoDummyByName(data.name);
        } catch (err) {
            throw new Error(`Error on saveDemoDummy: ${err}`);
        }
    }

    // Method to find a DemoDummy by name
    async findDemoDummyByName(name) {
        try {
            return this.model.findOne({name: name}, null, null);
        } catch (err) {
            throw new Error(`Error on findDemoDummyByName: ${err}`);
        }
    }

}

export default DemoDummyRepository;
