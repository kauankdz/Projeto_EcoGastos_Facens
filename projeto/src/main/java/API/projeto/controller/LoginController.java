package API.projeto.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import API.projeto.DTO.LoginDTO;
import API.projeto.model.usuario;
import API.projeto.model.InfoUsuario;

import org.springframework.beans.factory.annotation.Autowired;
import API.projeto.DAO.IUsuario;
import API.projeto.Util.MensagemDTO;

@RestController
@CrossOrigin("*") // serve para não bloquear a entrada de dados do front
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private IUsuario dao;

    @PostMapping
    public ResponseEntity<?> fazerLogin(@RequestBody LoginDTO dto) {
        usuario user = dao.login(dto.getEmail(), dto.getSenha());

        if (user != null) {
            InfoUsuario inf = new InfoUsuario(user.getId(), user.getEmail(), user.getNome());

            // System.out.println(inf.getIdUsuariologado() + inf.getEmailLogado() +
            // inf.getNomeLogado());
            return ResponseEntity.ok(new MensagemDTO("Login bem-sucedido! Bem vindo " + inf.getNomeLogado()));

        } else {
            return ResponseEntity.ok(new MensagemDTO("senha ou email invalido"));
        }
    }

}
