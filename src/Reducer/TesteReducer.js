import { TESTE } from './../Action/ActionType';

const INITIAL_STATE = {
    dadosGitHub: null,
};

export default function UsuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TESTE.DADOS_GIT:
            console.log('$ Redux', action.payload)
            return {
                ...state,
                dadosGitHub: action.payload
            };
        default:
            return state;
    }
};