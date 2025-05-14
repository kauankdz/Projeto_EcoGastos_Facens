function calculateSum() {
  const pessoas = parseFloat(document.getElementById('n_pessoas').value);
  const valorTotal = parseFloat(document.getElementById('valor_total').value);
  const resultEl = document.getElementById('result');

  if (pessoas <= 0 || valorTotal <= 0 || isNaN(pessoas) || isNaN(valorTotal)) {
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
  } else if (valorPorPessoa > 25) {
      classificacao = "🟢 Adequado";
  } else {
      classificacao = "✅ Econômico";
  }

  resultEl.innerHTML = `💰 Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}<br>📊 Classificação: <strong>${classificacao}</strong>`;

  // Armazena temporariamente os dados para salvar depois
  window.resultadoAtual = {
      data: new Date().toLocaleDateString(),
      calculadora: "Água",
      pessoas: pessoas,
      valor: `R$ ${valorTotal.toFixed(2)}`,
      descricao: ` ${classificacao}`
  };
}

function salvarResultado() {
  if (!window.resultadoAtual) {
      alert("⚠️ Calcule antes de salvar.");
      return;
  }

  const historico = JSON.parse(localStorage.getItem("historico")) || [];
  historico.push(window.resultadoAtual);
  localStorage.setItem("historico", JSON.stringify(historico));

  alert("✅ Resultado salvo com sucesso!");
  window.resultadoAtual = null; // Limpa após salvar
}
