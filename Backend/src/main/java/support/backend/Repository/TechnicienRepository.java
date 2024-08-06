package support.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import support.backend.Model.Technicien;

public interface TechnicienRepository extends JpaRepository<Technicien, Long> {
}
