package support.backend.Service;


import support.backend.dto.EquipementDTO;

import java.util.List;

public interface EquipementService {

        EquipementDTO createEquipement(EquipementDTO equipementDTO);
        List<EquipementDTO> getAllEquipements();
        EquipementDTO getEquipementById(int id);
        EquipementDTO updateEquipement(int id, EquipementDTO equipementDTO);
        void deleteEquipement(int id);
}

