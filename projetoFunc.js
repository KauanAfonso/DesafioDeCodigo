function Ranqueada(vitoria, derrota){
    saldo = vitoria - derrota
    let rank = "";

    if(saldo <= 10){
        rank ="Ferro";
    }else if(saldo >= 11 && saldo <=20){
        rank="Bronze";
    }else if(saldo>=21 && saldo <=50){
        rank = "Prata";
    }else if(saldo >= 51 && saldo <= 80){
        rank = "Ouro";
    }else if(saldo >= 81 && saldo <= 90){
        rank = "Diamante";
    }else if(saldo >= 91 && saldo <= 100){
        rank = "Lendário";
    }else{
        rank = "imortal";
    }

    console.log(`o heroi tem de saldo de ${saldo} e esta no nivel de ${rank}`)
}


Ranqueada(50, 20)