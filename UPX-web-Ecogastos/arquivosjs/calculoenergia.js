import { Util } from './Util.js'; // Nome do arquivo sensível a maiúsculas!

let resultadoAtual ={
    data: null,
    calculadora: "",
    numeroPessoas: null,
    valor: null,
    classificacao:""  
};

function limpar(){
    resultadoAtual ={
        data: null,
        calculadora: "",
        numeroPessoas: null,
        valor: null,
        classificacao:""  
    };
}

function calcularEnergia() {
    const pessoas = parseFloat(document.getElementById('n_pessoas').value);
    const valorConta = parseFloat(document.getElementById('valor_energia').value);

    if (pessoas <= 0 || valorConta <= 0 || isNaN(pessoas) || isNaN(valorConta)) {
        alert("⚠️ Preencha os campos corretamente.");
        return;
    }

    const valorPorPessoa = valorConta / pessoas;
    let classificacao = "";

    if (valorPorPessoa > 80) {
        classificacao = "🔴 Muito alto";
    } else if (valorPorPessoa > 60) {
        classificacao = "🟠 Alto";
    } else if (valorPorPessoa > 40) {
        classificacao = "🟡 Médio";
    } else if (valorPorPessoa > 25) {
        classificacao = "🟢 Adequado";
    } else {
        classificacao = "✅ Econômico";
    }
    

    const resultadoElemento = document.getElementById("result");
    resultadoElemento.textContent = `R$ ${valorPorPessoa.toFixed(2)} por pessoa - ${classificacao}`;

    resultadoAtual = {
        data: new Date().toLocaleDateString(),
        calculadora: "Energia",
        numeroPessoas: pessoas,
        valor: valorConta.toFixed(2),
        classificacao : ` ${classificacao}`
    };

    // alert(resultadoAtual.calculadora);
    // alert(resultadoAtual.data);
    // alert(resultadoAtual.numeroPessoas);
    // alert(resultadoAtual.valor);
    //     alert(resultadoAtual.classificacao);

    
    
}

function salvarResultado() {

    if (resultadoAtual.classificacao === "") {
        alert("⚠️ Calcule antes de salvar.");
        return;
    }
    if (Util.lerBooleano("loginAtivo")) {
        // jeito do kaun
        // const historico = JSON.parse(localStorage.getItem("historico")) || [];
        // historico.push(window.resultadoAtual);
        //localStorage.setItem("historico", JSON.stringify(historico));


        // console.log(resultadoAtual.numeroPessoas)
        // console.log(resultadoAtual.valor)
        // console.log(resultadoAtual.classificacao)

        fetch("http://localhost:8080/historico", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json' // faz ele esperar uma resposta em json boa prática
            },
            body: JSON.stringify(resultadoAtual)
        })
        .then(response => {
            if (!response.ok) throw new Error("Erro ao salvar no servidor");
            return response.json();
        })
        .then(data => {
            alert("✅ Resultado salvo com sucesso!");
            window.location.href = "calculo-energia.html";
            limpar();
        })
        .catch(error => {
            alert("❌ Erro ao salvar: " + error.message);
            console.error(error);
        });


    }else{
        alert("Faça login para salvar o resultado")
    }
}

window.salvarResultado = salvarResultado;
window.calcularEnergia = calcularEnergia;
