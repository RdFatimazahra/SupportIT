package support.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPanne;
    private String description;
    private LocalDate dateSignalement;
    private EtatPanne etatPanne;

    @OneToMany(mappedBy = "panne")
    private List<HistoriquePanne> historiquePannes;
}
