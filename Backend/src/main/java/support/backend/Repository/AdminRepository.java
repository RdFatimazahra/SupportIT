package support.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import support.backend.Model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
