package API.projeto.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "historico", schema = "ecogastos") // Especifica o schema
public class Historico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "valor", nullable = true)
    private double valor; // resultado da calculadora talvez deve serr colocada como int

    @Column(name = "classificacao", nullable = true)
    private String classificacao; // resultado da calculadora

    @Column(name = "data", updatable = false, insertable = false)
    private LocalDateTime data;

    @Column(name = "calculadora", nullable = true)
    private String calculadora;

    @Column(name = "numero_pessoas", nullable = true)
    private int numeroPessoas; // resultado da calculadora

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = true)
    private usuario usuario;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getNumeroPessoas() {
        return numeroPessoas;
    }

    public void setNumeroPessoas(int numeroPessoas) {
        this.numeroPessoas = numeroPessoas;
    }

    public String getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(String classificacao) {
        this.classificacao = classificacao;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public String getCalculadora() {
        return calculadora;
    }

    public void setCalculadora(String calculadora) {
        this.calculadora = calculadora;
    }

    public usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(usuario usuario) {
        this.usuario = usuario;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
}
