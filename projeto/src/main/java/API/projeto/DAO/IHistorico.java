package API.projeto.DAO;

import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import API.projeto.model.Historico;
import API.projeto.model.usuario;

public interface IHistorico extends JpaRepository<Historico, Integer> {

    List<Historico> findAllByUsuarioId(int usuario);

    @Query(value = "SELECT * FROM historico WHERE id_usuario = :idUsuario", nativeQuery = true)
    List<Historico> buscarHistoricosPorUsuario(@Param("idUsuario") String idUsuario);
}
