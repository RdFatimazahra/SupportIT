package support.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import support.backend.Model.Panne;
import support.backend.Model.Ticket;
import support.backend.dto.PanneDTO;
import support.backend.dto.TicketDTO;

@Mapper
public interface TicketMapper {
//    TicketMapper INSTANCE = Mappers.getMapper(TicketMapper.class);
//
//    @Mapping(source = "technicien.id", target = "technicienId")
//    @Mapping(source = "utilisateur.id", target = "utilisateurId")
//    @Mapping(source = "equipement.id", target = "equipementId")
//    @Mapping(source = "panne.id", target = "panneId")
//    TicketDTO ticketToTicketDTO(Ticket ticket);
//
//    @Mapping(source = "technicienId", target = "technicien.id")
//    @Mapping(source = "utilisateurId", target = "utilisateur.id")
//    @Mapping(source = "equipementId", target = "equipement.id")
//    @Mapping(source = "panneId", target = "panne.id")
//    Ticket ticketDTOToTicket(TicketDTO ticketDTO);

    TicketMapper INSTANCE = Mappers.getMapper(TicketMapper.class);

    TicketDTO ticketToTicketDTO(Ticket ticket);
    Ticket ticketDTOToTicket(TicketDTO ticketDTO);


}

