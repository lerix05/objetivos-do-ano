const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for(let i=0; i <  botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
 }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
    
   
     
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-04-21T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
segundos =130; 
minutos = Math.floorsegundos / 60; // resultado esperado: 2
segundos %= 60; // resultados esperado : 10
let mensagem = "Olá, mundo!";
let nome = "leticia";
let sobrenome = "leticia";
let nomeCompleto = nome + "leticia fernanda siqueira " + sobrenome;

console.log(nomeCompleto); // Saída: "
// Declaração das variáveis
let idade = 17;

// Concatenação de string com valor numérico
let mensagem = "A idade é: " + idade;

// Resultado: "A idade é: 17"
console.log(mensagem);
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempos[0]);
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
}
function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}
atualizaCronometro();
setInterval(atualizaCronometro(), 1000);
setInterval(atualizaCronometro, 1000);
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
const tempoObjetivo1 = new Date("2020-10-05T00:00:00");
return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
if (tempoFinal > 0){
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
} else {
    return "Prazo Finalizado";
}
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);
contadores[3].textContent = calculaTempo(tempoObjetivo4);
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempoObjetivo1); //Antes

contadores[0].textContent = calculaTempo(tempos[0]); // Depois
// Para cada objetivo na lista de contadores
for (let i=0; i<contadores.length;i++)
    //Calcular o tempo usando a função e associá-lo ao objetivo
            contadores[i].textContent = calculaTempo(tempos[i]);
            function atualizaCronometro(){
                for (let i=0; i<contadores.length;i++){
                    contadores[i].textContent = calculaTempo(tempos[i]);   
                }
            }
            function comecaCronometro(){
                atualizaCronometro();
                setInterval(atualizaCronometro,1000);
            }
            
            comecaCronometro();
            return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
            if (tempoFinal > 0){
                return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
            } else {
                return "Prazo Finalizado";
            }
            document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
            document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
            document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
            document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
            document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];
// contadores[i].textContent = calculaTempo(tempos[i]);
function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
        document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3]; 
    }
}
for (let i=0; i<contadores.length;i++){
    document.getElementById("seg1").textContent = calculaTempo(tempos[i])[3]; 
}
for (let i=0; i<contadores.length;i++){
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3]; 
}
for (let i=0; i<contadores.length;i++){
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    console.log("seg"+i);
}
function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];

    for (let i=0; i<contadores.length;i++){
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
        console.log("seg"+i);
    }
}
function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
        console.log("seg"+i);
    }
}
console.log("seg"+i);
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];
document.getElementById("seg2").textContent = calculaTempo(tempos[2])[3];
document.getElementById("seg3").textContent = calculaTempo(tempos[3])[3];
for (let i=0; i < tempos.length; i++){
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
}
for (let i=0; i<contadores.length;i++){
    document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
}
               
               
            
