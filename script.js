/* 
function bttsArms(button) {
    if (button.classList.contains("arm-desocupado")) {
        console.log('oi')
    }
} */

var oi = document.getElementById("imgTeste")

function uso(button) {
    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = "Ocupado";
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = "Manutenção";
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = "Desocupado";
    }
}

function mudar1(button) {
    var imgArm1 = document.getElementById("imgArm1")
    if (button.classList.contains("arm-desocupado")) {
        imgArm1.src = "./components/aberto.jpeg"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm1.src = "./components/fechado.jpeg"
    }
    else {
        imgArm1.src = "./components/manutençao.jpeg"
    }
}

function mudar2(button) {
    var imgArm2 = document.getElementById("imgArm2")
    if (button.classList.contains("arm-desocupado")) {
        imgArm2.src = "./components/aberto.jpeg"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm2.src = "./components/fechado.jpeg"
    }
    else {
        imgArm2.src = "./components/manutençao.jpeg"
    }
}

function mudar3(button) {
    var imgArm3 = document.getElementById("imgArm3")
    if (button.classList.contains("arm-desocupado")) {
        imgArm3.src = "./components/aberto.jpeg"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm3.src = "./components/fechado.jpeg"
    }
    else {
        imgArm3.src = "./components/manutençao.jpeg"
    }
}

function mudar4(button) {
    var imgArm4 = document.getElementById("imgArm4")
    if (button.classList.contains("arm-desocupado")) {
        imgArm4.src = "./components/aberto.jpeg"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm4.src = "./components/fechado.jpeg"
    }
    else {
        imgArm4.src = "./components/manutençao.jpeg"
    }
}

function mudar5(button) {
    var imgArm5 = document.getElementById("imgArm5")
    if (button.classList.contains("arm-desocupado")) {
        imgArm5.src = "./components/aberto.jpeg"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm5.src = "./components/fechado.jpeg"
    }
    else {
        imgArm5.src = "./components/fechado.jpeg"
    }
}

function mudar6(button) {
    var imgArm6 = document.getElementById("imgArm6")
    if (button.classList.contains("arm-desocupado")) {
        imgArm6.src = "./components/aberto.jpeg"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm6.src = "./components/fechado.jpeg"
    }
    else {
        imgArm6.src = "./components/fechado.jpeg"
    }
}
