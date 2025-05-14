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
}

function salvarResultado() {
    const pessoas = parseFloat(document.getElementById('n_pessoas').value);
    const valorConta = parseFloat(document.getElementById('valor_energia').value);

    if (pessoas <= 0 || valorConta <= 0 || isNaN(pessoas) || isNaN(valorConta)) {
        alert("⚠️ Preencha os campos corretamente antes de salvar.");
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

    const novoRegistro = {
        data: new Date().toLocaleDateString("pt-BR"),

        calculadora: "Energia",
        pessoas: pessoas,
        valor: `R$ ${valorPorPessoa.toFixed(2)}`,
        descricao: classificacao
    };

    const historico = JSON.parse(localStorage.getItem("historico")) || [];
    historico.push(novoRegistro);
    localStorage.setItem("historico", JSON.stringify(historico));

    alert("✅ Resultado salvo no histórico!");
}
