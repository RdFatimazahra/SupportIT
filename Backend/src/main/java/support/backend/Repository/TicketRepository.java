package support.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import support.backend.Model.Ticket;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {

    List<Ticket> findByTechnicienId(int technicienId);
    List<Ticket> findByUtilisateurId(int utilisateurId);
}
