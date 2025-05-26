document.addEventListener("DOMContentLoaded", function () {
const tabela = document.getElementById('tabela-historico');
    fetch("http://localhost:8080/historico")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar histórico");
            }
            return response.json();
        })
        .then(historico => {
            if (!historico || historico.length === 0) {
                const row = tabela.insertRow();
                const cell = row.insertCell(0);
                cell.colSpan = 6;
                cell.classList.add('text-center');
                cell.innerHTML = "Nenhum histórico encontrado.";
                return;
            }

            historico.forEach((item, index) => {
                const row = tabela.insertRow();
                dataFomatada = formatarData(item.data);
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${dataFomatada || ''}</td>
                    <td>${item.calculadora || ''}</td>
                    <td>${item.numeroPessoas || ''}</td>
                    <td>${item.valor?.toFixed(2) || ''}</td>
                    <td>${item.classificacao || ''}</td>
                `;
            });
        })
        .catch(error => {
            console.error("Erro ao carregar histórico:", error);
            const row = tabela.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 6;
            cell.classList.add('text-center', 'text-danger');
            cell.innerText = "Erro ao carregar os dados do servidor.";
        });
});
    
// function resetarHistorico() {
//     if (confirm("Tem certeza que deseja apagar todo o histórico? Esta ação não pode ser desfeita.")) {
//         fetch("http://localhost:8080/historico", {
//             method: "DELETE"
//         })
//         .then(response => {
//         if (!response.ok) throw new Error("Erro ao apagar histórico.");
//             location.reload();
//         })
//         .catch(error => {
//             alert("Erro ao apagar histórico: " + error.message);
//         });
//     }
// }

function atualizarPagina() {
    location.reload();
}

function formatarData(dataISO) {
  const data = new Date(dataISO);
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // meses começam em 0
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

