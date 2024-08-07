package support.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import support.backend.Model.Panne;
import support.backend.dto.PanneDTO;

@Mapper
public interface PanneMapper {

    PanneMapper INSTANCE = Mappers.getMapper(PanneMapper.class);
    PanneDTO panneToPanneDTO(Panne panne);
    Panne panneDTOToPanne(PanneDTO panneDTO);

}
