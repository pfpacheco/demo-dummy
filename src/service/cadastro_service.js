import CadastroRepository from '../repository/cadastro_repository.js'

class CadastroService {
    async save(data) {
        try {
            const cadastroRepository = new CadastroRepository();
            const res = await cadastroRepository.save(data);
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
            if (err.message != null) {
                return {code: 500, status: 'INTERNAL_SERVER_ERROR' ,error_message: err.message};
            }
        }
    }
}

export default CadastroService;