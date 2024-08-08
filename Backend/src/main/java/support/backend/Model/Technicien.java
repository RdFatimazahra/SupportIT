package support.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor

public class Technicien extends Personne {

    public Technicien(String nom, String email, String password) {
        super(nom, email, password, Role.TECHNICIEN);
    }

    @OneToMany(mappedBy = "technicien")
    private  List<Ticket> tickets;

}


