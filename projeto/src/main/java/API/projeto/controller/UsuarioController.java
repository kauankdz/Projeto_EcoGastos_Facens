package API.projeto.controller;

import java.util.List;
import java.util.Optional;

import javax.swing.JOptionPane;

import org.aspectj.internal.lang.annotation.ajcDeclareEoW;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import javax.swing.JOptionPane;
import API.projeto.DAO.IUsuario;
import API.projeto.DTO.LoginDTO;
import API.projeto.model.usuario;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
@CrossOrigin("*") // serve para não bloquear a entrada de dados do front
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IUsuario dao;

    @GetMapping // pega do banco
    public ResponseEntity<List<usuario>> listaUsuarios() {
        List<usuario> lista = dao.findAll();
        return ResponseEntity.status(200).body(lista);
    }

    @PostMapping // Cadastrar novo usuário
    public ResponseEntity<usuario> criaUsuario(@RequestBody usuario usuario) {
        // System.out.println(usuario.getEmail() + usuario.getId() + usuario.getNome() +
        // usuario.getSenha());

        try {
            // Verificar se o email já existe no banco
            Optional<usuario> existingUser = dao.findByEmail(usuario.getEmail());
            if (existingUser.isPresent()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email já cadastrado!");
            }

            usuario usuarioNovo = dao.save(usuario);
            return ResponseEntity.status(201).body(usuarioNovo);
        } catch (Exception e) {
            // Log para depuração e melhor rastreabilidade
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro ao cadastrar usuário", e);

        }
    }

    @PutMapping // modificar
    public ResponseEntity<usuario> editarUsuario(@RequestBody usuario usuario) {

        usuario usuarioNovo = dao.save(usuario);

        return ResponseEntity.status(201).body(usuarioNovo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirUsuario(@PathVariable Integer id) {
        dao.deleteById(id);
        return ResponseEntity.status(204).build();
    }

}
