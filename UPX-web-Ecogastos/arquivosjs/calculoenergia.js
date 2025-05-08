
// Função JavaScript 

    function calcularEnergia() {
        const Pessoas = parseFloat(document.getElementById('n_pessoas').value) || 0;
        const consumo_mensal = parseFloat(document.getElementById('consumo_mensal').value) || 0;
        const consumoDiarioPessoa = (consumo_mensal / 30) / Pessoas;
        let Descricao;

        if (Pessoas <= 0 || consumo_mensal <= 0) {
            document.getElementById('result').innerText = "⚠️ Insira valores positivos.";
            return;
        }

        if (consumoDiarioPessoa > 12) {
            Descricao = '🔴 Muito alto';
        } else if (consumoDiarioPessoa >= 9) {
            Descricao = '🟠 Alto';
        } else if (consumoDiarioPessoa >= 6) {
            Descricao = '🟡 Médio';
        } else if (consumoDiarioPessoa >= 3) {
            Descricao = '🟢 Adequado';
        } else {
            Descricao = '✅ Ótimo';
        }

        document.getElementById('result').innerText = `Consumo médio: ${consumoDiarioPessoa.toFixed(2)} kWh/dia | ${Descricao}`;
    }
   
    function salvarResultado() {
        const resultado = document.getElementById('result').textContent;
        if (resultado.trim() === "") {
            alert("Nenhum resultado para salvar!");
        } else {
            alert("Resultado salvo com sucesso: " + resultado);
            // Aqui futuramente você pode salvar no localStorage ou em um banco de dados!
        }
    }

