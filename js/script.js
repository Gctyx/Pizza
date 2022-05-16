//função incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa"); //querySelectorAll para pegar todos os selector que tem btn-incrementa, o . é por ser class

for(let botao of botoesIncrementa)
{
    botao.addEventListener('click', incrementa); //função do addeventlistener é click ou seja quando clicar executar função incrementa

    function incrementa()
    {
        var item = botao.closest('.item'); //o primeiro que ele clicou, atualizando a quantidade que o consumidor quer

        var input = item.querySelector('.quantidade'); //aumentado na quantidade de um em um
        input.value++;

        var preco = pegaPrecoItem(item);
        adicionaAoTotal(preco);
    }       
}

//função decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa"); //querySelectorAll para pegar todos os selector que tem btn-decrementa, o . é por ser class

for(let botao of botoesDecrementa)
{
    botao.addEventListener('click', decrementa);

    function decrementa()
    {
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');

        if(input.value > 0)//não passar do 0
        {
            input.value--;
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco);
        }
    }
}
//Funções auxiliares
//1. PegaPreçoItem()
function pegaPrecoItem(item)
{
    var precoItem = item.querySelector('.preco-item'); //pegar o preço de cada pizza

    return Number(precoItem.textContent);

}

//2. adicionaAoTotal()
function adicionaAoTotal(valor)
{
    var elementoTotal = document.querySelector('#total');

    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}