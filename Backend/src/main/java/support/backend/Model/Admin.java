package support.backend.Model;

import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class Admin extends Personne {

    public Admin(String nom, String email, String password) {
        super(nom, email, password, Role.ADMIN);
    }
}

