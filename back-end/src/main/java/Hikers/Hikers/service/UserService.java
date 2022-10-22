package Hikers.Hikers.service;

import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.model.User;
import org.springframework.http.ResponseEntity;

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
}
