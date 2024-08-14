package support.backend.auth;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import support.backend.Model.Technicien;
import support.backend.Model.Utilisateur;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/Admin/register")
    public ResponseEntity<AuthenticationResponse>register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.register(request));
    }


    @PostMapping("/Admin/registerTech")
    public ResponseEntity<AuthenticationResponse>registerTech(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.registerTech(request));
    }

    @PostMapping("/registerAdmin")
    public ResponseEntity<AuthenticationResponse>registerAdmin(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.registerAdmin(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse>authenticate(
            @RequestBody AuthenticationRequest  request
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(request));

    }

    @GetMapping("Admin/AllUsers")
    public List<Utilisateur>getAllUsers() {
        return authenticationService.getAllUsers();
    }

    @GetMapping("Admin/AllTech")
    public List<Technicien>getAllTech() {
        return authenticationService.getAllTechniciens();
    }


}
