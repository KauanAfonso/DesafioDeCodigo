var personagem = "Kauan";
var quantidadeDeXp = 2500;
var nivel = "";

if(quantidadeDeXp <= 1000){
    nivel = "Ferro";
}else if(quantidadeDeXp>= 1001 && quantidadeDeXp <=2000){
    nivel = "Bronze";
}else if(quantidadeDeXp>= 2001 && quantidadeDeXp <=5000){
    nivel = "Prata";
}else if(quantidadeDeXp>= 6001 && quantidadeDeXp <=7000 ){
    nivel = "Ouro";
}else if(quantidadeDeXp>= 7001 && quantidadeDeXp <= 8000){
    nivel = "platina";
}else if(quantidadeDeXpv>= 8001 && quantidadeDeXp <= 9000){
    nivel = "Ascendente";
}else if(quantidadeDeXp>=9001 && quantidadeDeXp <= 10000){
    nivel = "imortal";
}else{
        nivel = "Radiante";
}



console.log(`O  Heroi de nome ${personagem} está no nivel ${nivel}`)