package support.backend.Service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import support.backend.Model.Equipement;
import support.backend.Model.EtatEquipement;
import support.backend.Repository.EquipementRepository;
import support.backend.dto.EquipementDTO;
import support.backend.mapper.EquipementMapper;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EquipementServiceImplTest {

    @InjectMocks
    private EquipementServiceImpl equipementService;

    @Mock
    private EquipementRepository equipementRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createEquipement() {
        EquipementDTO equipementDTO = new EquipementDTO();
        equipementDTO.setNom("Test Equipement");
        equipementDTO.setDescription("Description");
        equipementDTO.setImage("image.png");
        equipementDTO.setEtat(EtatEquipement.EN_SERVICE);

        Equipement equipement = EquipementMapper.INSTANCE.equipementDTOToEquipement(equipementDTO);
        when(equipementRepository.save(any(Equipement.class))).thenReturn(equipement);

        EquipementDTO savedEquipementDTO = equipementService.createEquipement(equipementDTO);

        assertNotNull(savedEquipementDTO);
        assertEquals("Test Equipement", savedEquipementDTO.getNom());
        assertEquals(EtatEquipement.EN_SERVICE, savedEquipementDTO.getEtat());
        verify(equipementRepository, times(1)).save(any(Equipement.class));
    }

    @Test
    void getAllEquipements() {
        // Given
        List<Equipement> equipements = Arrays.asList(new Equipement(), new Equipement());
        when(equipementRepository.findAll()).thenReturn(equipements);

        // When
        List<EquipementDTO> result = equipementService.getAllEquipements();

        // Then
        assertNotNull(result);
        assertEquals(2, result.size());
        verify(equipementRepository, times(1)).findAll();
    }

    @Test
    void getEquipementById() {
        Equipement equipement = new Equipement();
        equipement.setIdEquipement(1);
        equipement.setNom("Test Equipement");
        equipement.setDescription("Description");
        equipement.setImage("image.png");
        equipement.setEtat(EtatEquipement.HORS_SERVICE);

        when(equipementRepository.findById(1)).thenReturn(Optional.of(equipement));

        EquipementDTO equipementDTO = equipementService.getEquipementById(1);

        assertNotNull(equipementDTO);
        assertEquals("Test Equipement", equipementDTO.getNom());
        assertEquals(EtatEquipement.HORS_SERVICE, equipementDTO.getEtat());
        verify(equipementRepository, times(1)).findById(1);
    }

    @Test
    void updateEquipement() {
        Equipement equipement = new Equipement();
        equipement.setIdEquipement(1);
        equipement.setNom("Old Equipement");
        equipement.setDescription("Old Description");
        equipement.setImage("old_image.png");
        equipement.setEtat(EtatEquipement.EN_SERVICE);

        EquipementDTO equipementDTO = new EquipementDTO();
        equipementDTO.setNom("Updated Equipement");
        equipementDTO.setDescription("Updated Description");
        equipementDTO.setImage("updated_image.png");
        equipementDTO.setEtat(EtatEquipement.HORS_SERVICE);

        when(equipementRepository.findById(1)).thenReturn(Optional.of(equipement));
        when(equipementRepository.save(any(Equipement.class))).thenReturn(equipement);

        EquipementDTO updatedEquipementDTO = equipementService.updateEquipement(1, equipementDTO);

        assertNotNull(updatedEquipementDTO);
        assertEquals("Updated Equipement", updatedEquipementDTO.getNom());
        assertEquals(EtatEquipement.HORS_SERVICE, updatedEquipementDTO.getEtat());
        verify(equipementRepository, times(1)).findById(1);
        verify(equipementRepository, times(1)).save(any(Equipement.class));
    }

    @Test
    void deleteEquipement() {
        equipementService.deleteEquipement(1);
        verify(equipementRepository, times(1)).deleteById(1);
    }

    @Test
    void count() {
        when(equipementRepository.count()).thenReturn(5L);
        assertEquals(5, equipementService.count());
    }
}
