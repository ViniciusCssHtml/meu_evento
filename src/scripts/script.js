function countdown() {
  const dataEvento = new Date("Jan 29 2024 19:00:00");
  const timeStempEvento = dataEvento.getTime();

  const contaTempo = setInterval(() => {
    const agora = new Date();
    const timeAtual = agora.getTime();
    const distEvento = timeStempEvento - timeAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distEvento / diaEmMs);
    const horasEvento = Math.floor((distEvento % diaEmMs) / horaEmMs);
    const minutosEvento = Math.floor((distEvento % horaEmMs) / minutosEmMs);
    const segundosEvento = Math.floor((distEvento % minutosEmMs) / 1000);

    document.querySelector("#dia").innerHTML = `${diasAteEvento}`;
    document.querySelector("#horas").innerHTML = `${horasEvento}`;
    document.querySelector("#minutos").innerHTML = `${minutosEvento}`;
    document.querySelector("#segundos").innerHTML = `${segundosEvento}`;

    if (distEvento < 0) {
      clearInterval(contaTempo);
      document.getElementById("contador").innerHTML = " Evento Expirado";
    }
    //console.log(diasAteEvento, horasEvento, minutosEvento, segundosEvento);
  }, 1000);
}

countdown();

function validarEmail() {
  const btn = document.querySelector("button");
  btn.addEventListener("click", checkEmail);

  function checkEmail(event) {
    event.preventDefault();
    const email = document.querySelector("#email");
    const placeholder = email.placeholder;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value)) {
      email.classList.add("invalido");
      btn.classList.add("invalido");
      email.value = "DIGITE UM E-MAIL VALIDO";
    } else {
      email.classList.remove("invalido");
      btn.classList.remove("invalido");
      email.value = "";
    }
  }
}
validarEmail();
