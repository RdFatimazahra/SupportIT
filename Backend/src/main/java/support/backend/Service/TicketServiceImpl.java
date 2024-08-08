package support.backend.Service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import support.backend.Model.*;
import support.backend.Repository.EquipementRepository;
import support.backend.Repository.PanneRepository;
import support.backend.Repository.TicketRepository;
import support.backend.Repository.UserRepository;
import support.backend.dto.TicketDTO;
import support.backend.mapper.TicketMapper;

import java.time.LocalDate;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EquipementRepository equipementRepository;

    @Autowired
    private PanneRepository panneRepository;

    @Transactional
    public TicketDTO createTicket(TicketDTO ticketDTO, Utilisateur utilisateur) {
        Equipement equipment = equipementRepository
                .findById(ticketDTO.getEquipementId())
                .orElseThrow(() -> new RuntimeException("Equipement introuvable"));

        Panne panne = panneRepository
                .findById(ticketDTO.getPanneId())
                .orElseThrow(() -> new RuntimeException("Panne introuvable "));

        // Create the Ticket
        Ticket ticket = new Ticket();
        ticket.setDateCreation(LocalDate.now());
        ticket.setDescription(ticketDTO.getDescription());
        ticket.setEtatTicket(EtatTicket.OUVERT);
        ticket.setUtilisateur(utilisateur);
        ticket.setEquipement(equipment);
        ticket.setPanne(panne);


        Ticket savedTicket = ticketRepository.save(ticket);

        return TicketMapper.INSTANCE.ticketToTicketDTO(savedTicket);
    }

}

