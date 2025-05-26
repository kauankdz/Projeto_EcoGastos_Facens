const formulario = document.querySelector("form");

const Iusername = document.querySelector(".username")
const Iemail = document.querySelector(".email")
const Ipassword = document.querySelector(".password")
const Iconfirm_password = document.querySelector(".confirm_password")


function limpar() {
  Iusername.value = "";
  Iemail.value = "";
  Ipassword.value = "";
  Iconfirm_password.value = "";

}

function cadastrar() {

  const userData = {
      nome: Iusername.value,
      email: Iemail.value,
      senha: Ipassword.value
  };

//   console.log("Dados do usuário:", userData); 

  fetch("http://localhost:8080/usuarios", {
      headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(userData)
  })
  .then(function (res) { 
      if (res.ok) {
          console.log("Usuário cadastrado com sucesso!");
          alert("Usuário cadastrado")
          window.location.href = "login.html"; // redireciona após login

      } else {
          console.log("Erro ao cadastrar usuário:", res);
          alert("E-mail já cadastrado.");


      }
  })
  .catch(function (err) { 
      console.log("Erro de rede ou servidor:", err);
  });
}

formulario.addEventListener('submit', function (event){
  event.preventDefault();

  if (Ipassword.value === Iconfirm_password.value) {
    cadastrar();
    } else {
    alert("As senhas não coincidem!");
    limpar();
    }
  
});