const display = document.getElementById('resultado')
let parenteses = 0

function isSymbol(char){
    return ['+', '-', '*', '/', '%', '.', '(', ')', '()' ].includes(char)
}

function insert(char){
    const valor = display.value
    if(isSymbol(char) && valor.length == 0 ){
        display.value = display.value 
    }else if(isSymbol(char) && isSymbol(valor[valor.length - 1])){
        display.value =display.value 
    }
    else{
        display.value +=char
    }
}
function inserirParenteses(){
    const valor = display.value
    const ultimoChar = valor.slice(-1)

    if(parenteses == 0 && (valor == '' || isSymbol(ultimoChar))){
        display.value +='('
        parenteses++
    } else if(parenteses >0 && !isSymbol(ultimoChar) && ultimoChar != '('){
        display.value +=')'
        parenteses--
    }

}
 
function limpar(){
    display.value = ''
    parenteses = 0 
}

function apagarUnidade(){
   display.value = display.value.slice(0, -1)
}

function calcular(){
    
    try{
        display.value = math.evaluate(display.value)
    }catch(error){
        display.value = 'Erro'
    }finally{
        display.value = math.evaluate(display.value)
    }
}
