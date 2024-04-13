import DemoDummyRepository from '../repository/demo-dummy-repository.js'

class DemoDummyService {
    async save(data) {
        try {
            const demoDummyRepository = new DemoDummyRepository();
            const res = await demoDummyRepository.saveDemoDummy(data);
            if (res != null) {
                return {
                    _id: res._id,
                    name: res.name,
                    cnu: res.cnu,
                    demo_field: res.demo_field,
                    createdAt: res.createdAt
                };
            }
        } catch (err) {
            if (err != null) {
                console.log(`Error on service: ${err}`);
            }
        }
    }
}

export default DemoDummyService;