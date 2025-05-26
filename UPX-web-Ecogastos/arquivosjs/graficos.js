// graficos.js
document.addEventListener("DOMContentLoaded", function () {
    // Gráfico de Linha: Consumo de Energia Elétrica por Região (2014 - 2023)
    const graficoEnergiaCrescimento = new Chart(
        document.getElementById("graficoEnergiaCrescimento"),
        {
            type: "line",
            data: {
                labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
                datasets: [
                    {
                        label: "Sudeste",
                        data: [250, 255, 260, 270, 280, 290, 295, 305, 310, 320],
                        borderColor: "#4CAF50",
                        fill: false
                    },
                    {
                        label: "Nordeste",
                        data: [180, 185, 190, 195, 200, 205, 210, 220, 225, 230],
                        borderColor: "#FFC107",
                        fill: false
                    },
                    {
                        label: "Sul",
                        data: [160, 162, 164, 170, 172, 175, 178, 180, 185, 190],
                        borderColor: "#2196F3",
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: "#ffffff" }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: "#ffffff" }
                    },
                    y: {
                        ticks: { color: "#ffffff" }
                    }
                }
            }
        }
    );

    // Gráfico de Barras: Consumo Anual de Energia por Região (kWh/ano)
    const graficoEnergiaAnual = new Chart(
        document.getElementById("graficoEnergiaAnual"),
        {
            type: "bar",
            data: {
                labels: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
                datasets: [
                    {
                        label: "kWh por ano",
                        data: [100, 150, 130, 300, 200],
                        backgroundColor: [
                            "#8BC34A",
                            "#FFC107",
                            "#FF5722",
                            "#03A9F4",
                            "#E91E63"
                        ]
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: "#ffffff" }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: "#ffffff" }
                    },
                    y: {
                        ticks: { color: "#ffffff" }
                    }
                }
            }
        }
    );

    // Gráfico de Pizza: Consumo de Água por Região
    const graficoAgua = new Chart(
        document.getElementById("graficoAgua"),
        {
            type: "pie",
            data: {
                labels: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
                datasets: [
                    {
                        label: "% de Consumo de Água",
                        data: [15, 25, 10, 30, 20],
                        backgroundColor: [
                            "#4CAF50",
                            "#FFC107",
                            "#FF5722",
                            "#03A9F4",
                            "#9C27B0"
                        ]
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: "#ffffff" }
                    }
                }
            }
        }
    );
});
