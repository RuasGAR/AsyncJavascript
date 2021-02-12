//Promise 
const example = new Promise((resolve, reject) => {
    try {
        resolve('sucesso');
    } catch(e) {
        reject('Erro' + e);
    }
});

const success = (res) => {
    console.log(`Parabéns, isso foi um ${res}!`);
}

function error(err) {
    console.log(`Que pena, o erro ${err} impediu-nos de continuar!`);
} 

//"Chamada" da Promise
example
    //Em 'res', estarei recebendo o parâmetro 'sucesso'  
    .then(res => success(res))
    .catch(err => error(err));