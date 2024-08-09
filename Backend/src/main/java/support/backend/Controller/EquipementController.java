package support.backend.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import support.backend.Service.EquipementService;
import support.backend.dto.EquipementDTO;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/Admin/equipements")
@CrossOrigin(origins = "http://localhost:4200/")
public class EquipementController {

    @Autowired
    private EquipementService equipementService;

    @PostMapping
    public ResponseEntity<EquipementDTO> createEquipement(@RequestBody EquipementDTO equipementDTO) {
        EquipementDTO createdEquipement = equipementService.createEquipement(equipementDTO);
        return ResponseEntity.ok(createdEquipement);
    }

    @GetMapping("/afficher")
    public ResponseEntity<List<EquipementDTO>> getAllEquipements() {
        List<EquipementDTO> equipements = equipementService.getAllEquipements();
        return ResponseEntity.ok(equipements);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EquipementDTO> getEquipementById(@PathVariable int id) {
        EquipementDTO equipement = equipementService.getEquipementById(id);
        return ResponseEntity.ok(equipement);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EquipementDTO> updateEquipement(@PathVariable int id, @RequestBody EquipementDTO equipementDTO) {
        EquipementDTO updatedEquipement = equipementService.updateEquipement(id, equipementDTO);
        return ResponseEntity.ok(updatedEquipement);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipement(@PathVariable int id) {
        equipementService.deleteEquipement(id);
        return ResponseEntity.noContent().build();
    }
}
