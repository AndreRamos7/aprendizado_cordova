var storage = window.localStorage;
/*
    var storage = window.localStorage;
    var value = storage.getItem(key); // Pass a key name to get its value.
    storage.setItem(key, value) // Pass a key name and its value to add or update that key.
    storage.removeItem(key) // Pass a key name to remove that key from storage.
*/

produtos = { "pizza": [
    {'sabor': 'Calabresa',
    'icone': 'https://images.rappi.com.br/products/2097701218-1591715125868.png?d=128x90',
    'descricao': 'Calabresa com queijo, presunto, alho, cebola, pimentão e tomate',
    'itens_adicionais': [
        {'nome':'alho', 'valor': '0,5'}, 
        {'nome':'orégano', 'valor': '0,5'},
        {'nome':'pimentão', 'valor': '0,5'},
        {'nome':'presunto', 'valor': '0,5'}
        ]
    },

]};

storage.setItem("total", "12,00");
var total = storage.getItem("total");
