package Hikers.Hikers.service;

import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface UserService {

    ResponseEntity<String> login(Map<String,String> requestMap);

    ResponseEntity<String> signUp(Map<String,String> requestMap);

    ResponseEntity<String> signUpHotel(Map<String,String> requestMap);

    ResponseEntity<String> signUpTransportProvider(Map<String,String> requestMap);

    ResponseEntity<String> signUpEquipmentProvider(Map<String, String> requestMap);

    ResponseEntity<String> signUpTravelingguide(Map<String, String> requestMap);

    ResponseEntity<?> userProfile();

    ResponseEntity<List<User>> getAllUsers();

    ResponseEntity<User> getUser(Long id);

    ResponseEntity<Optional<Transportprovider>> getTraProvide(Long service_provider_id);


    ResponseEntity<?> verifyUser(String code);

    ResponseEntity<?> verifyGuide(String code);

    ResponseEntity<?> verifyEquprovider(String code);
    
    ResponseEntity<?> forgotpassword(Map<String, String> requestMap);
    
    ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap);

    ResponseEntity<?> getUser();
    
    ResponseEntity<?> uploadprofile(MultipartFile file);

    ResponseEntity<?> verifyEquproviderByAdmin(String code);

    ResponseEntity<?> RejectEquproviderByAdmin(String code);

    ResponseEntity<?> RejectGuideByAdmin(String code);

    ResponseEntity<?> verifyGuideByAdmin(String code);

    ResponseEntity<?> suggetionguide();

    ResponseEntity<?> suggetiontransport();

    ResponseEntity<?> askque(Map<String, String> requestMap);

    ResponseEntity<?> replay(Long code,Map<String, String> requestMap);

    ResponseEntity<?> volientier(Map<String, String> requestMap);

    ResponseEntity<?> getvolientiers();

    ResponseEntity<?> volientierprograms(Map<String, String> requestMap);
    
    ResponseEntity<?> getquestionsnew();

    ResponseEntity<?> updatequestionstatus(Long code);

    ResponseEntity<?> addarticles(Map<String, String> requestMap);

    ResponseEntity<?> deletearticles(Long code);

    ResponseEntity<?> allquestions();
}
