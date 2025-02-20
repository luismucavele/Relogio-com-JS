

let atualizartempo = () =>{
let hora = document.querySelector(".hora");
let agora = new Date();
let horario = correcaoHorario(agora.getHours()) + ":" + correcaoHorario(agora.getMinutes()) + ":" + correcaoHorario(agora.getSeconds());
hora.textContent = horario;
}

const correcaoHorario = (numero) => {
    if(numero < 10){
        return "0" + numero;
    }
        return numero;
}

atualizartempo();


setInterval(atualizartempo, 1000);




