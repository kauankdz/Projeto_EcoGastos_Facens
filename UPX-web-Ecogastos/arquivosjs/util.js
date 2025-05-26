

export class Util {
  // Salva um valor booleano
  static salvarBooleano(chave, valor) {
    if (typeof valor === "boolean") {
      localStorage.setItem(chave, JSON.stringify(valor));
    } else {
      console.error("O valor precisa ser booleano (true ou false).");
    }
  }

  // Lê um valor booleano
  static lerBooleano(chave) {
    const valor = localStorage.getItem(chave);
    if (valor === null) return null; // Chave não encontrada
    try {
      return JSON.parse(valor); // Converte de string para boolean
    } catch (erro) {
      console.error("Erro ao converter o valor para booleano:", erro);
      return null;
    }
  }


}


