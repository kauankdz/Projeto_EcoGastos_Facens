function calcularEnergia() {
    const pessoas = parseFloat(document.getElementById('n_pessoas').value);
    const valorConta = parseFloat(document.getElementById('valor_energia').value);
    const resultEl = document.getElementById('result');

    if (pessoas <= 0 || valorConta <= 0) {
        resultEl.innerText = "⚠️ Insira valores positivos.";
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

    resultEl.innerHTML = `💰 Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}<br>📊 Classificação: <strong>${classificacao}</strong>`;
}
