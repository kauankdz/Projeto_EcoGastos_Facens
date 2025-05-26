
import { Util } from './Util.js';


document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha: password })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.mensagem || "Erro no login");
                
            });
        }
        return response.json();
    })
    .then(data => {
        if(data.mensagem === "senha ou email invalido"){
        alert(data.mensagem);
        Util.salvarBooleano("loginAtivo", false);

        
        }else{ 
            alert(data.mensagem);
            Util.salvarBooleano("loginAtivo", true);
            window.location.href = "index.html";
           
        }
    })
    .catch(error => {
        console.error("Erro no login:", error.message);
        alert(error.message);
    });
});
