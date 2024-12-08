// 0 imgs/pau-brasil_1.jpg
// 1 imgs/araucaria_1.jpg
// 2 imgs/acer_1.jpg
// 3 imgs/laranjeira_1.jpg
// 4 imgs/cecoia_1.jpg
// 5 imgs/ipe-branco_1.jpg
// 6 imgs/bananeira_1.jpg
// 7 imgs/ipe-amarelo_1.jpg
// 8 imgs/palmeira_1.jpg
// 9 imgs/amoreira_1.jpg
// 10 imgs/jabuticaba_1.jpg
// 11 imgs/lichia_1.jpg
// 12 imgs/abeto_1.jpg
// 13 imgs/goiabeira_1.jpg
// 14 imgs/betula_1.jpg
// 15 imgs/jacaranda-minas_1.jpg
// 16 imgs/carvalho_1.jpg
// 17 imgs/cerejeira_1.jpg

var imgLinks = ["pau-brasil_1.jpg", "araucaria_1.jpg", "acer_1.jpg", "laranjeira_1.jpg", "cecoia_1.jpg", "ipe-branco_1.jpg", 
"bananeira_1.jpg", "ipe-amarelo_1.jpg", "palmeira_1.jpg", "amoreira_1.jpg", "jabuticaba_1.jpg", "lichia_1.jpg", "abeto_1.jpg", 
"goiabeira_1.jpg", "betula_1.jpg", "jacaranda-minas_1.jpg", "carvalho_1.jpg", "cerejeira_1.jpg"];
var cardOrder = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 
    6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 
    12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17];
var cardPicked1 = null;
var cardPicked2 = null;

function clickEvent(n){

    // Ve a posição da primeira e segunda carta escolhida
    // Ve se o jogador não escolheu duas da mesma carta ou escolheu pares certos já revelados
    if ((cardPicked1 == null) && (cardOrder[n] != null)){
        cardPicked1 = n;
        console.log(cardPicked1, cardPicked2);
    }
    else if ((cardPicked2 == null) && (n != cardPicked1) && (cardOrder[n] != null)){
        cardPicked2 = n;
        console.log(cardPicked1, cardPicked2);
    }
    

    // Se errou o par
    else if ((cardOrder[cardPicked1] != cardOrder[cardPicked2]) && (cardPicked2 != null)){
        // Volta a imagem da folha
        document.getElementById(cardPicked1).style.backgroundImage = "url(imgs/logo.jpg)";
        document.getElementById(cardPicked2).style.backgroundImage = "url(imgs/logo.jpg)";

        if (cardOrder[n] != null){
            cardPicked1 = n;
        }
        else{
            cardPicked1 = null;
        }
        cardPicked2 = null;
        console.log(cardPicked1, cardPicked2);
    }

    // Muda a imagem
    if (cardOrder[n] != null){
        document.getElementById(n).style.backgroundImage = "url(imgs/" + imgLinks[cardOrder[n]] + ")";
    }

    // Se acertou o par
    if ((cardOrder[cardPicked1] == cardOrder[cardPicked2]) && (cardPicked2 != null)) {
        // Apaga o valor das posições dos pares certeiros da lista cardOrder
        cardOrder[cardPicked1] = null;
        cardOrder[cardPicked2] = null;
        
        cardPicked1 = null;
        cardPicked2 = null;

        console.log("match");
    }
}

// Embaralha a ordem das cartas toda vez que o site abre
function randomizeCards(){
    for (var index = cardOrder.length - 1; index >= 0; index--) {
        var j = Math.floor(Math.random() * (index + 1));
        var temp = cardOrder[index];
        cardOrder[index] = cardOrder[j];
        cardOrder[j] = temp;
    }
}
randomizeCards()