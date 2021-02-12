//Estrutura normal de função
function filtro(iterable, condition) {
    if(typeof iterable == 'Array') {
        return list.filter(condition)
    } else if (iterable == 'Object') {
        return iterable[condition]
    } else {
        throw console.error('É, faltou ideia pra completar o resto.');
    }
}

const filtro_flecha = (iterable, condition) => { //Repare o armazenamento numa variável
    if(typeof iterable == 'Array') {
        return list.filter(condition)
    } else if (iterable == 'Object') {
        return iterable[condition]
    } else {
        throw console.error('É, faltou ideia pra completar o resto.');
    }
}
// A estrutura acima constitui a abordagem funcional dos componentes em React.



//Formatos comuns de arrow functions

//Quando temos somente um argumento, podemos omitir os parênteses que o circundariam;
//Além disso, se não abrirmos chaves após a flechinha, indicamos que o conteúdo é o próprio retorno da função
let squared = num => num*num;
// Isso é igual a
let squared_2 = num => {return num*num};
// que é igual a 
let squared_3 = (num) => {
    return num*num
}



//Caramba hein, mudou muito, mas que economia! Aprendeu com a Empiricus?
//O caso mais comum de uso para arrow function é na passagem de comportamentos enquanto função anônima.
//O exemplo mais palpável do dia a dia ocorre na integração das nossas aplicações.

//FOTINHA DE INTEGRAÇÃO DO IONIC NO SHRLOCKE




