package support.backend.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
public class Utilisateur extends Personne {


    @OneToMany(mappedBy = "utilisateur")
    private List<Ticket> tickets;
}

