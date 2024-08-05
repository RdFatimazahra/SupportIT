package support.backend.Model;


import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class Utilisateur extends Personne {

    public Utilisateur(String nom, String email, String password) {
        super(nom, email, password, Role.USER);
    }
}

