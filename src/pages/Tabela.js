import React from 'react';
import './Teste.css';
import { useSelector } from 'react-redux';

const Tabela = (props) => {

    const dadosTablea = useSelector(state => state.testeReducer.dadosGitHub)

    return (

        <table id="customers">
            <thead>
                <tr>
                    <th>Informações</th>
                    <th>Dados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Login</td>
                    <td>{dadosTablea?.login}</td>
                </tr>
                <tr>
                    <td>Avatar</td>
                    <td>{dadosTablea?.avatar_url}</td>
                </tr>
                <tr>
                    <td>url</td>
                    <td>{dadosTablea?.url}</td>
                </tr>
                <tr>
                    <td>Seguidores</td>
                    <td>{dadosTablea?.followers}</td>
                </tr>
            </tbody>

        </table>
    );
}

export default Tabela;