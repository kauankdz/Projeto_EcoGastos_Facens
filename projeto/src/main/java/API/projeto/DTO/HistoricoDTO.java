package API.projeto.DTO;

public class HistoricoDTO {
    private double valor;
    private String classificacao;
    private String data;
    private String calculadora;
    private int numeroPessoas;

    // Getters e Setters

    public String getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(String classificacao) {
        this.classificacao = classificacao;
    }

    public String getData() {
        return data;
    }

    public int getNumeroPessoas() {
        return numeroPessoas;
    }

    public void setNumeroPessoas(int numeroPessoas) {
        this.numeroPessoas = numeroPessoas;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getCalculadora() {
        return calculadora;
    }

    public void setCalculadora(String calculadora) {
        this.calculadora = calculadora;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

}
