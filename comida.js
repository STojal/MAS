// Comida
//lista de alimentos
var alimentos = {
    "cão": [{

        "Nome": "ração",
        "Preço": 4.00,
        "Imagem": "Racao_cao.jpg"
    },
    {
        "Nome": "biscoitos",
        "Preço": 4.99,
        "Imagem": "exemplo.jpg"
    },
    {
        "Nome": "lata",
        "Preço": 5.50,
        "Imagem": "exemplo.jpg"
    },
    {
        "Nome": "Ossos",
        "Preço": 6.50,
        "Imagem": "exemplo.jpg"
    }



    ],
    "gato": [{

        "Nome": "ração",
        "Preço": 4.00,
        "Imagem": "Racao_cao.jpg"
    },
    {
        "Nome": "biscoitos",
        "Preço": 4.99,
        "Imagem": "exemplo.jpg"
    },
    {
        "Nome": "lata",
        "Preço": 5.50,
        "Imagem": "exemplo.jpg"
    }



    ],

}
//carrega os aliemntos
$(document).ready(function () {

    loadanimals();
});
function loadanimals() {
    var i = 0;

    while (i < 2) {
        var lista_de_especies = ["cão", "gato"]
        for (let alimento of alimentos[lista_de_especies[i]]) {
            var img = alimento.Imagem
            var nome = alimento.Nome
            var Preço = alimento.Preço
            document.querySelector('#Alimentos').innerHTML +=
                '<div class="card" style="width: 18rem;">' +
                '<img src="' + img + '" class="card-img-top" alt="' + nome + '">' +
                '<div class="card-body">' +
                '<p class="card-text">Especie: ' + lista_de_especies[i] + '</p>' +
                '<p class="card-text">Tipo: ' + nome + '</p>' +
                '<p>Preço: ' + Preço + '/kg <button style="float: right;" value=' + Preço + ' onclick="addpurchase()" name="' + nome + "_" + lista_de_especies[i] + '"><i class="fa fa-shopping-bag"></i> Comprar </button></p>' +
                '</div>'
        }
        i++
    }

}
// carrega o alimento conforme a especie
$('#especie').on('change', function () {
    var lista_de_especies = ["cão", "gato"]
    var value = this.value
    $('#Alimentos').empty()
    if (value == "default") {
        var i = 0;
        while (i < 2) {
            var lista_de_especies = ["cão", "gato"]
            for (let alimento of alimentos[lista_de_especies[i]]) {
                var img = alimento.Imagem
                var nome = alimento.Nome
                var Preço = alimento.Preço
                document.querySelector('#Alimentos').innerHTML +=
                    '<div class="card" style="width: 18rem;">' +
                    '<img src="' + img + '" class="card-img-top" alt="' + nome + '">' +
                    '<div class="card-body">' +
                    '<p class="card-text">Especie: ' + lista_de_especies[i] + '</p>' +
                    '<p class="card-text">Tipo: ' + nome + '</p>' +
                    '<p>Preço: ' + Preço + '/kg <button style="float: right;" value=' + Preço + ' onclick="addpurchase()" name="' + nome + "_" + lista_de_especies[i] + '"><i class="fa fa-shopping-bag"></i> Comprar </button></p>' +
                    '</div>'
            }
            i++
        }
    }
    else {
        for (let alimento of alimentos[lista_de_especies[value]]) {
            var img = alimento.Imagem
            var nome = alimento.Nome
            var Preço = alimento.Preço
            document.querySelector('#Alimentos').innerHTML +=
                '<div class="card" style="width: 18rem;">' +
                '<img src="' + img + '" class="card-img-top" alt="' + nome + '">' +
                '<div class="card-body">' +
                '<p class="card-text">Especie: ' + lista_de_especies[value] + '</p>' +
                '<p class="card-text">Tipo: ' + nome + '</p>' +
                '<p>Preço: ' + Preço + '/kg <button style="float: right;" value=' + Preço + ' onclick="addpurchase()" name="' + nome + "_" + lista_de_especies[value] + '"><i class="fa fa-shopping-bag"></i> Comprar </button></p>' +
                '</div>'
        }
    }





})



//submeter
function validar() {

    if (total == 0) {
        console.log(3)
        alert("Adicione pelo menos um artigo!!!")
    }
    else {


            //navega prara outra pagina
        window.location.href = 'Confirmar_compra.html?numero_de_produtos=' + numero_de_produtos + '&array=' + array_botao_presionado;


    }


}
// pagina da confirmação
var total_pagar =0
// ir buscar as variaveis que são passadas no href
if (window.location.href.includes("Confirmar_compra.html")) {
    var q = document.location.toString();
    q = q.split("?");
    q = q[1].split("&");
    var NP = q[0].split("=")
    var array_deformado = q[1].split("=")
    var new_array = array_deformado[1].split(",")
    var array_final = []
    // transformar estes codigod em ã e ç e adcionar as novas palavras a um novo array
    for (item in new_array) {
        valor = new_array[item]
        if (valor.includes("%C3%A3")) {
            valor = valor.replace("%C3%A3", "ã")
        }
        if (valor.includes("%C3%A7")) { valor = valor.replace("%C3%A7", "ç") }
        console.log(valor)
        array_final.push(valor)
    }
    // criar um array que permite a leitura mais facil
    let array_certo = [];
    for (let i = 0; i < array_final.length; i += 2) {
        array_certo.push([array_final[i], array_final[i + 1]]);
    }
    //adcionar a parte incial do carrinho 
    document.querySelector('#Carrinho').innerHTML +=
        '<h4 class="d-flex justify-content-between align-items-center mb-3">' +
        '<span class="text-primary">Carrinho</span>' +
        '<span class="badge bg-primary rounded-pill">' + NP[1] + '</span>' +
        '</h4>' +
        '<ul class="list-group mb-3">'
    // adcionar os elemtnos do carrinho
    for (product in array_certo) {
        var tipo_de_alimento = array_certo[product]
        var foodItem = alimentos[tipo_de_alimento[1]].find(item => item.Nome === tipo_de_alimento[0])
        total_pagar += parseFloat(foodItem.Preço)
        document.querySelector('#Carrinho').innerHTML +=
            '<li class="list-group-item d-flex justify-content-between lh-sm">' +
            '<div>' +
            '<h6 class="my-0">' + tipo_de_alimento[0] + " para " + tipo_de_alimento[1] + '</h6>' +
            '<small class="text-body-secondary">Brief description</small>' +
            '</div>' +
            '<span class="text-body-secondary">' +foodItem.Preço + '</span>' +
            '</li>'
    }
    // adciona o total a pagar
    document.querySelector('#Carrinho').innerHTML +=
        '<li class="list-group-item d-flex justify-content-between">' +
        '<span> Total (USD) </span>' +
        '<strong>' +total_pagar.toFixed(2)+'$</strong>' +
        '</li>' +
        '</ul>' +
        '<form class="card p-2">' +
        '<div class="input-group">' +
        '<input type="text" class="form-control" placeholder="Promo code">' +
        '<button type="submit" class="btn btn-secondary">Redeem</button>' +
        '</div>' +
        '</form>'
}




//adcionar valor o total
var total = 0
var numero_de_produtos = 0
var array_botao_presionado = []
function addpurchase() {
    var botao_presionado = event.target.name
    var valor = event.target.value
    array_botao_presionado.push(botao_presionado.split("_"))
    console.log(array_botao_presionado)
    total = total + parseFloat(valor)
    console.log(total)
    console.log(typeof (total))
    var escrevr = document.getElementById("total")
    escrevr.textContent = total.toFixed(2)
    numero_de_produtos += 1
}
//limpar o total
function limpar() {
    numero_de_produtos = 0
    total = 0
    array_botao_presionado =[]
    console.log(total)
    var escrevr = document.getElementById("total")
    escrevr.textContent = total



}





//validar a compra
$('input[name="paymentMethod"').on('change', function () {
    var tipo_de_pagamento = document.querySelector('input[name="paymentMethod"]:checked').value
    console.log(tipo_de_pagamento)
    if (tipo_de_pagamento === "MBway") {
        $('#Metodo').empty()
        document.querySelector('#Metodo').innerHTML +=
            '<div class="col-md-6">' +
            '<label for="cc-numero" class="form-label">Número de telemovel </label>' +
            '<input type="text" class="form-control" id="cc-numero" placeholder="" required="">' +
            '<small class="text-body-secondary">Número completo</small>' +
            '<div class="invalid-feedback">' +
            'Coloque um número de telemovel válido' +
            '</div>' +
            '</div>'
    }
    else {
        $('#Metodo').empty()
        document.querySelector('#Metodo').innerHTML +=
            '<div class="col-md-6">' +
            '<label for="cc-name" class="form-label">Nome do cartao </label>' +
            '<input type="text" class="form-control" id="cc-name" placeholder="" required="">' +
            '<small class="text-body-secondary">Nome completo do cartão</small>' +
            '<div class="invalid-feedback">' +
            'Nome do cartao é necessario' +
            '</div>' +
            '</div>' +

            '<div class="col-md-6">' +
            '<label for="cc-number" class="form-label">Numero do cartão de credito</label>' +
            '<input type="text" class="form-control" id="cc-number" placeholder="" required="">' +
            '<div class="invalid-feedback">' +
            'Necessita de um cartao de credito ' +
            '</div>' +
            '</div>' +

            '<div class="col-md-3">' +
            '<label for="cc-expiration" class="form-label">Validade</label>' +
            '<input type="text" class="form-control" id="cc-expiration" placeholder="" required="">' +
            '<div class="invalid-feedback">' +
            'Data de validade necessaria' +
            '</div>' +
            '</div>' +

            '<div class="col-md-3">' +
            '<label for="cc-cvv" class="form-label">CVV</label>' +
            '<input type="text" class="form-control" id="cc-cvv" placeholder="" required="">' +
            '<div class="invalid-feedback">' +
            'Codigo de segurança invalido!' +
            '</div>' +
            '</div>'
    }



})

//End of comida