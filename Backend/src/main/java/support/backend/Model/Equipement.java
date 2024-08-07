package support.backend.Model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Equipement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idEquipement;
    private String nom;
    private String  description;
    private String image;
    private EtatEquipement etat;

    @OneToMany(mappedBy = "equipement")
    private List<HistoriquePanne> historiquePannes;

}