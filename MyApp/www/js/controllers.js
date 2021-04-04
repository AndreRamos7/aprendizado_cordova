var comanda = [];

function adicionar_produto(produto){
    comanda.push(produto);

    console.log(comanda);
    storage.setItem("total", comanda.length);
    atualiza_total();
    presentToast();
    storage.setItem("comanda", comanda);

    var comandas = storage.getItem("comanda");
    console.log(comandas, '00');


}
