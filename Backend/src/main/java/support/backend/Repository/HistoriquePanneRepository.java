package support.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import support.backend.Model.HistoriquePanne;

import java.util.List;

public interface HistoriquePanneRepository extends JpaRepository<HistoriquePanne, Integer> {
//    List<HistoriquePanne> findByEquipementId(int equipementId);
}
