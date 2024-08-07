package support.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import support.backend.Model.Panne;
import support.backend.Repository.PanneRepository;
import support.backend.dto.PanneDTO;
import support.backend.mapper.PanneMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    private PanneRepository panneRepository;

    @Override
    public PanneDTO createPanne(PanneDTO panneDTO) {
        Panne panne = PanneMapper.INSTANCE.panneDTOToPanne(panneDTO);
        Panne savedPanne = panneRepository.save(panne);
        return PanneMapper.INSTANCE.panneToPanneDTO(savedPanne);
    }

    @Override
    public List<PanneDTO> getAllPanne() {
        return panneRepository.findAll().stream()
                .map(PanneMapper.INSTANCE::panneToPanneDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PanneDTO getPanneById(int id) {
        Panne panne = panneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Panne not found"));
        return PanneMapper.INSTANCE.panneToPanneDTO(panne);
    }

    @Override
    public PanneDTO updatePanne(int id, PanneDTO panneDTO) {
        Panne panne = panneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Panne not found"));
        panne.setDescription(panneDTO.getDescription());
        panne.setDateSignalement(panneDTO.getDateSignalement());
        panne.setEtatPanne(panneDTO.getEtatPanne());
        Panne updatedPanne = panneRepository.save(panne);
        return PanneMapper.INSTANCE.panneToPanneDTO(updatedPanne);
    }

    @Override
    public void deletePanneById(int id) {
        panneRepository.deleteById(id);
    }
}

