const prompt = require('prompt-sync')();

while (true) {

 nome = prompt('Digite o nome do Herói (ou "sair" para encerrar): ');

    if(nome.toLowerCase() === "sair") {
        console.log("Encerrando o programa...");
        break;
    }

 xp = prompt('Digite o XP do Herói: ');


if (xp < 0) 
    {
        console.log(`Nível de XP não aceito, informe um número acima de 0.`)
    }
else if(xp >= 0 && xp <= 1000) 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível FERRO!`)
    } 
else if (xp <= 2000) 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível BRONZE!`)
    }
else if (xp <= 5000) 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível PRATA!`)
    }
else if (xp <= 7000) 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível OURO!`)
    }
else if (xp <= 8000) 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível PLATINA!`)
    }
else if (xp <= 9000) 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível ASCENDENTE!`)
    }
else if (xp <= 10000) 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível IMORTAL!`)
    }
else 
    {
        console.log(`O herói de nome ${nome} possui XP de ${xp} e está no nível RADIANTE!`)
    }

} // fim while 