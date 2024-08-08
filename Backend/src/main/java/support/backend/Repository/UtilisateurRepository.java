package support.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import support.backend.Model.Personne;
import support.backend.Model.Utilisateur;

import java.util.Optional;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {


}
