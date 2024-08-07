package support.backend.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import support.backend.Model.Equipement;
import support.backend.Repository.EquipementRepository;
import support.backend.dto.EquipementDTO;
import support.backend.mapper.EquipementMapper;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class EquipementServiceImpl implements EquipementService {

    @Autowired
    private EquipementRepository equipementRepository;

    @Override
    public EquipementDTO createEquipement(EquipementDTO equipementDTO) {
        Equipement equipement = EquipementMapper.INSTANCE.equipementDTOToEquipement(equipementDTO);
        Equipement savedEquipement = equipementRepository.save(equipement);
        return EquipementMapper.INSTANCE.equipementToEquipementDTO(savedEquipement);
    }

    @Override
    public List<EquipementDTO> getAllEquipements() {
        return equipementRepository.findAll().stream()
                .map(EquipementMapper.INSTANCE::equipementToEquipementDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EquipementDTO getEquipementById(int id) {
        Equipement equipement = equipementRepository.findById(id).orElseThrow(() -> new RuntimeException("Equipement not found"));
        return EquipementMapper.INSTANCE.equipementToEquipementDTO(equipement);
    }

    @Override
    public EquipementDTO updateEquipement(int id, EquipementDTO equipementDTO) {
        Equipement equipement = equipementRepository.findById(id).orElseThrow(() -> new RuntimeException("Equipement not found"));
        equipement.setNom(equipementDTO.getNom());
        equipement.setDescription(equipementDTO.getDescription());
        equipement.setEtat(equipementDTO.getEtat());
        equipement.setImage(equipementDTO.getImage());
        Equipement updatedEquipement = equipementRepository.save(equipement);
        return EquipementMapper.INSTANCE.equipementToEquipementDTO(updatedEquipement);
    }

    @Override
    public void deleteEquipement(int id) {
        equipementRepository.deleteById(id);
    }
}

