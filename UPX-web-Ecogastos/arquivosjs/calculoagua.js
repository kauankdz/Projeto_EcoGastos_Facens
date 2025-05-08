  function calculateSum() {
      const pessoas = parseFloat(document.getElementById('n_pessoas').value);
      const valorTotal = parseFloat(document.getElementById('valor_total').value);
      const resultEl = document.getElementById('result');

      if (pessoas <= 0 || valorTotal <= 0) {
        resultEl.innerText = "⚠️ Preencha todos os campos com valores positivos.";
        return;
      }

      const valorPorPessoa = valorTotal / pessoas;
      let classificacao = "";

      if (valorPorPessoa > 80) {
        classificacao = "🔴 Muito alto";
      } else if (valorPorPessoa > 60) {
        classificacao = "🟠 Alto";
      } else if (valorPorPessoa > 40) {
        classificacao = "🟡 Médio";
      } else if (valorPorPessoa > 20) {
        classificacao = "🟢 Adequado";
      } else {
        classificacao = "✅ Ótimo";
      }

      resultEl.innerHTML = `💰 Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}<br>📊 Classificação: <strong>${classificacao}</strong>`;
    }