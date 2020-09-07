import * as React from 'react';
import './Teste.css';
import Tabela from './Tabela';
import { TESTE } from './../Action/ActionType';
import TesteAction from './../Action/TesteAction';
import { useDispatch } from 'react-redux';

const Teste = (props) => {
    const dispatch = useDispatch();

    const mockarDados = () => {
        dispatch({
            type: TESTE.DADOS_GIT,
            payload: { login: 'login dados Mock', avatar_url: 'www.avatar', url: 'wwww', followers: '10' }
        })
    };

    return (
        <div className='container'>
            <h2>Teste Redux</h2>
            <div className='container-btn'>
                <button onClick={TesteAction.getDadosGitHub()} >Pegar dados do GitHub</button>
                <button onClick={mockarDados} >Pegar dados Mock</button>
            </div>
            <Tabela />
        </div>
    );
}
export default Teste;