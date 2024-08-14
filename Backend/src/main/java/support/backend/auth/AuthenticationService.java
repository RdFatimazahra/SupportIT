package support.backend.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import support.backend.Model.Admin;
import support.backend.Model.Role;
import support.backend.Model.Technicien;
import support.backend.Model.Utilisateur;
import support.backend.Repository.TechnicienRepository;
import support.backend.Repository.UserRepository;
import support.backend.Repository.UtilisateurRepository;
import support.backend.config.JwtService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {


    private final UserRepository userRepository;

    private final UtilisateurRepository utilisateurRepository;

    private  final TechnicienRepository technicienRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    //RegisterUser :
    public AuthenticationResponse register(RegisterRequest request) {
        var user = new Utilisateur();
            user.setNom(request.getNom());
            user.setEmail(request.getEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setRole(Role.USER);

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();


    }

    //RegisterTechnicien :
    public AuthenticationResponse registerTech(RegisterRequest request) {
        var tech = new Technicien();
            tech.setNom(request.getNom());
                tech.setEmail(request.getEmail());
                tech.setPassword(passwordEncoder.encode(request.getPassword()));
                tech.setRole(Role.TECHNICIEN);

        userRepository.save(tech);
        var jwtToken = jwtService.generateToken(tech);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();


    }

    //Register Admin ;
    public AuthenticationResponse registerAdmin(RegisterRequest request) {
        var admin = new Admin();
                admin.setNom(request.getNom());
                admin.setEmail(request.getEmail());
                admin.setPassword(passwordEncoder.encode(request.getPassword()));
                admin.setRole(Role.ADMIN);

        userRepository.save(admin);
        var jwtToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();


    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();


    }

    public List<Utilisateur> getAllUsers() {
        return  utilisateurRepository.findAll();
    }

    public  List<Technicien> getAllTechniciens() {
        return technicienRepository.findAll();
    }



}
