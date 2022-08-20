package Hikers.Hikers.service;

import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.model.User;
import org.springframework.http.ResponseEntity;
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

    ResponseEntity<String> SendTripData (Map<String,String> requestMap);

}
