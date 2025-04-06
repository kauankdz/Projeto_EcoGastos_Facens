
    function calculateSum() {
        const Pessoas = parseFloat(document.getElementById('n_pessoas').value) || 0;
        const consumo_diario = parseFloat(document.getElementById('consumo_diario').value) || 0;
        const LitrosPessoaDia = Math.ceil(consumo_diario / Pessoas);
        let Descricao;

        if (Pessoas <= 0 || consumo_diario <= 0) {
            document.getElementById('result').innerText = "⚠️ Insira valores positivos.";
            return;
        }

        if (LitrosPessoaDia > 185) {
            Descricao = '🔴 Muito alto';
        } else if (LitrosPessoaDia >= 156) {
            Descricao = '🟠 Alto';
        } else if (LitrosPessoaDia >= 131) {
            Descricao = '🟡 Médio';
        } else if (LitrosPessoaDia >= 111) {
            Descricao = '🟢 Adequado';
        } else {
            Descricao = '✅ Ótimo';
        }

        document.getElementById('result').innerText = `Consumo médio: ${LitrosPessoaDia} litros/dia | ${Descricao}`;
    }
