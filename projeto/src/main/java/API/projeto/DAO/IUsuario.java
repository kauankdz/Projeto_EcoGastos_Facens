package API.projeto.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import API.projeto.model.usuario;

public interface IUsuario extends JpaRepository<usuario, Integer> {
    Optional<usuario> findByEmail(String email);

    @Query(value = "SELECT * FROM usuarios WHERE email = :email AND senha = :senha", nativeQuery = true)
    public usuario login(String email, String senha);

}