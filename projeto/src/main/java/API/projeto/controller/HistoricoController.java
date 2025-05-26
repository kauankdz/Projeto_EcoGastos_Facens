package API.projeto.controller;

import API.projeto.DAO.IHistorico;
import API.projeto.DAO.IUsuario;
import API.projeto.DTO.HistoricoDTO;
import API.projeto.Util.MensagemDTO;
import API.projeto.model.Historico;
import API.projeto.model.InfoUsuario;
import API.projeto.model.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/historico")
public class HistoricoController {

    @Autowired
    private IHistorico historicoRepository;

    @Autowired
    private IUsuario usuarioRepository;

    @PostMapping
    public ResponseEntity<?> criarHistorico(@RequestBody HistoricoDTO historicoDTO) {
        // System.out.println("Aaaaaaaaaa");

        // System.out.println(historicoDTO.getValor());
        // System.out.println(historicoDTO.getClassificacao());
        // System.out.println(historicoDTO.getCalculadora());
        // System.out.println(historicoDTO.getData());
        // System.out.println(historicoDTO.getNumeroPessoas());

        // System.out.println(InfoUsuario.getNomeLogado());

        // System.out.println("aaaaaaaa");
        // Buscar o usuário no banco
        Optional<usuario> usuarioOptional = usuarioRepository.findById(InfoUsuario.getIdUsuariologado());

        // System.out.println(InfoUsuario.getIdUsuariologado());
        try {

            if (usuarioOptional.isEmpty()) {
                return ResponseEntity.badRequest().body("Usuário não encontrado");
            }

            usuario usuario = usuarioOptional.get();

            // Criar e preencher o objeto Historico
            Historico historico = new Historico();
            historico.setValor(historicoDTO.getValor());
            historico.setClassificacao(historicoDTO.getClassificacao());
            historico.setCalculadora(historicoDTO.getCalculadora());
            historico.setNumeroPessoas(historicoDTO.getNumeroPessoas());
            historico.setUsuario(usuario); // relação com o usuário

            // Salvar no banco
            historicoRepository.save(historico);

            return ResponseEntity.ok(new MensagemDTO("Histórico criado com sucesso"));

        } catch (Exception e) {
            // Log para depuração e melhor rastreabilidade
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro ao cadastrar usuário", e);

        }
    }

    @GetMapping
    public ResponseEntity<List<Historico>> listarHistorico() {
        List<Historico> historicos = historicoRepository.findAllByUsuarioId(InfoUsuario.getIdUsuariologado());
        return ResponseEntity.ok(historicos);
    }
}
