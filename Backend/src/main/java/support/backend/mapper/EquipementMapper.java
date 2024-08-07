package support.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import support.backend.Model.Equipement;
import support.backend.dto.EquipementDTO;

@Mapper
public interface EquipementMapper {
    EquipementMapper INSTANCE = Mappers.getMapper(EquipementMapper.class);

    EquipementDTO equipementToEquipementDTO(Equipement equipement);
    Equipement equipementDTOToEquipement(EquipementDTO equipementDTO);
}
