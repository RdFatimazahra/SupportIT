package support.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor

public class Technicien extends Personne {


    @OneToMany(mappedBy = "technicien")
    private  List<Ticket> tickets;

}


