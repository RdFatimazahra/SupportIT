package support.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import support.backend.Model.Equipement;

import java.util.Optional;

public interface EquipementRepository extends JpaRepository <Equipement,Integer> {
    Optional<Equipement> findById(Integer id);
    @Query(value = "select count(*) from Equipement ")
    long count();
}
