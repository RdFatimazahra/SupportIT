package support.backend.Service;

import support.backend.Model.Utilisateur;
import support.backend.dto.TicketDTO;

import java.util.List;

public interface TicketService {

    TicketDTO createTicket(TicketDTO ticketDTO, Utilisateur utilisateur);
    TicketDTO attribuerTicket(int idTicket, int idTechnicien);


}
