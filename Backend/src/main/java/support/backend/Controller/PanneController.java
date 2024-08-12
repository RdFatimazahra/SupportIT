package support.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import support.backend.Service.PanneService;
import support.backend.dto.PanneDTO;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/Admin/pannes")
@CrossOrigin(origins = "http://localhost:4200/")
public class PanneController {

    @Autowired
    private PanneService panneService;

    @PostMapping
    public ResponseEntity<PanneDTO> createPanne(@RequestBody PanneDTO panneDTO) {
        PanneDTO createdPanne = panneService.createPanne(panneDTO);
        return ResponseEntity.ok(createdPanne);
    }

    @GetMapping("/afficher")
    public ResponseEntity<List<PanneDTO>> getAllPannes() {
        List<PanneDTO> pannes = panneService.getAllPanne();
        return ResponseEntity.ok(pannes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PanneDTO> getPanneById(@PathVariable int id) {
        PanneDTO panne = panneService.getPanneById(id);
        return ResponseEntity.ok(panne);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PanneDTO> updatePanne(@PathVariable int id, @RequestBody PanneDTO panneDTO) {
        PanneDTO updatedPanne = panneService.updatePanne(id, panneDTO);
        return ResponseEntity.ok(updatedPanne);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePanne(@PathVariable int id) {
        panneService.deletePanneById(id);
        return ResponseEntity.noContent().build();
    }
}
