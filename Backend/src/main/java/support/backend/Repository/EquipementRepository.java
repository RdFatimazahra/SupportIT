package support.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import support.backend.Model.Equipement;

public interface EquipementRepository extends JpaRepository <Equipement,Integer> {
}
