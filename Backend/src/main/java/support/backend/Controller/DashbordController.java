package support.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import support.backend.Service.EquipementServiceImpl;
import support.backend.auth.AuthenticationService;

import javax.lang.model.util.Elements;

@RestController
@RequestMapping("/api/v1/auth/Admin")
@CrossOrigin(origins = "http://localhost:4200/")
public class DashbordController {

    @Autowired
    private EquipementServiceImpl equipementService;
    @GetMapping("/count")
    public Long count(){
        return equipementService.count();
    }


}
