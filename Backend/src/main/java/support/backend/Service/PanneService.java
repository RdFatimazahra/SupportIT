package support.backend.Service;

import support.backend.dto.PanneDTO;

import java.util.List;

public interface PanneService {
    PanneDTO createPanne(PanneDTO panneDTO);
    PanneDTO updatePanne(int id,PanneDTO panneDTO);
    PanneDTO getPanneById(int id);
    List<PanneDTO> getAllPanne();
    void deletePanneById(int id);

}
