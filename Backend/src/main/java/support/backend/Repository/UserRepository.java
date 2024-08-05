package support.backend.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import support.backend.Model.Personne;
import support.backend.Model.Utilisateur;

import java.util.Optional;

public interface UserRepository  extends JpaRepository <Personne, Integer> {

    Optional<Personne> findByEmail(String email);
}
