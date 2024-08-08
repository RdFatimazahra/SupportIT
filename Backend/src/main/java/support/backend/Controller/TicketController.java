package support.backend.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import support.backend.Model.Utilisateur;
import support.backend.Repository.UtilisateurRepository;
import support.backend.Service.TicketService;
import support.backend.dto.TicketDTO;

@RestController
@RequestMapping("/User/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @PostMapping
    public ResponseEntity<String> createTicket(@AuthenticationPrincipal Utilisateur utilisateur,
                                               @RequestBody TicketDTO ticketDTO) {
        try {
            Utilisateur utilisateurVerifie = utilisateurRepository
                    .findById(utilisateur.getId())
                    .orElseThrow(() -> new RuntimeException("Utilisateur not found"));

            ticketService.createTicket(ticketDTO, utilisateurVerifie);

            return ResponseEntity.status(HttpStatus.CREATED).body("Ticket created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ticket not created: " + e.getMessage());
        }
    }



}
