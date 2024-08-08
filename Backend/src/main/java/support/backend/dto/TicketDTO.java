package support.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import support.backend.Model.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class TicketDTO {

    private int idTicket;
    private String description;
    private LocalDate dateCreation;
    private EtatTicket etatTicket;
    private int equipementId;
    private int panneId;
    private int technicienId;
    private int utilisateurId;


}
