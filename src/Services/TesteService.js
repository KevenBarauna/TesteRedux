import axios from "axios";

// export const buscarDadosUsuario = () => {
//     axios({
//         method: "GET",
//         url: `https://api.github.com/users/KevenBarauna`,
//         headers: { "content-type": "application/json", },
//         data: JSON.stringify(),
//     })
//         .then(res =>
//             dispatch({
//                 type: TESTE.DADOS_GIT,
//                 payload: res.data
//             }),
//         )
//         .catch(error =>
//             console.error('erro: ', error)
//         )
// }

export const buscarDados = () => {
    console.log('$ Service')
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `https://api.github.com/users/KevenBarauna`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                reject(error)
            )
    })
}

export default {
    buscarDados,
}
