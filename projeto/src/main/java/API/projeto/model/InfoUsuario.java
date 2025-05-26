package API.projeto.model;

public class InfoUsuario {

    private static int IdUsuariologado;

    private static String emailLogado;

    private static String nomeLogado;

    public InfoUsuario(int id, String emailLogado, String nomeLogado) {
        this.IdUsuariologado = id;
        this.emailLogado = emailLogado;
        this.nomeLogado = nomeLogado;
    }

    public InfoUsuario() {

    }

    public static int getIdUsuariologado() {
        return IdUsuariologado;
    }

    public static void setIdUsuariologado(int IdUsuariologado) {
        InfoUsuario.IdUsuariologado = IdUsuariologado;
    }

    public static String getEmailLogado() {
        return emailLogado;
    }

    public static void setemailLogado(String emailLogado) {
        InfoUsuario.emailLogado = emailLogado;
    }

    public static String getNomeLogado() {
        return nomeLogado;
    }

    public static void setNomeLogado(String nomeLogado) {
        InfoUsuario.nomeLogado = nomeLogado;
    }

}
