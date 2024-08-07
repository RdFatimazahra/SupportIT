package support.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import support.backend.Model.EtatPanne;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class PanneDTO {

    private int idPanne;
    private String description;
    private LocalDate dateSignalement;
    private EtatPanne etatPanne;
}
