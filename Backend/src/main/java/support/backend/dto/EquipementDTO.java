package support.backend.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import support.backend.Model.EtatEquipement;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class EquipementDTO {

    private int idEquipement;
    private String nom;
    private String image;
    private String description;
    private EtatEquipement etat;
}
