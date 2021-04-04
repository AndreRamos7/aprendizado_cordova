var comanda = [];

function adicionar_produto(produto){
    comanda.push(produto);

    console.log(comanda);
    atualiza_total(comanda.length);
    presentToast();

}