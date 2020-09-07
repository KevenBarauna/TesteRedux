import { TESTE } from './ActionType';
import TesteService from './../Services/TesteService';

const getDadosGitHub = () => dispatch => {
    console.log('$ Action')
    TesteService.buscarDados()
        .then(response => {
            dispatch({
                type: TESTE.DADOS_GIT,
                payload: response.data
            });
        })
        .catch(erro => console.log('ERRO: - ', erro))
}

export default {
    getDadosGitHub,
}