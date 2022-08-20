package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.model.User;
import com.sun.net.httpserver.Authenticator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/user")
public interface UserRest {

    @PostMapping(path="/signup")
    public ResponseEntity<String> signUp(@RequestBody(required=true) Map<String, String> requestMap);

    @PostMapping(path="/signuphotel")
    public ResponseEntity<String> signUphotel(@RequestBody(required=true) Map<String, String> requestMap);

    @PostMapping(path="/signuptransportprovider")
    public ResponseEntity<String> signUptransportprovider(@RequestBody(required=true) Map<String, String> requestMap);

    @PostMapping(path="/signupequipmentprovider")
    public ResponseEntity<String> signUpequipmentprovider(@RequestBody(required=true) Map<String, String> requestMap);

    @PostMapping(path="/signuptraveling")
    public ResponseEntity<String> signUptraveling(@RequestBody(required=true) Map<String, String> requestMap);

    @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody(required = true) Map<String,String> requestMap);

    @PostMapping(path = "/addcoadmin")
    public ResponseEntity<String> addCoAdmin(@RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path="/userprofile")
    public ResponseEntity<?> userprofile();

    @GetMapping(path="/gethotels")
    public ResponseEntity<List<Hotel>> gethotels();

    @GetMapping(path="/gethotel/{hotel_id}")
    public ResponseEntity<Optional<Hotel>> getHotel(@PathVariable Long hotel_id);

    @GetMapping(path="/gettrasprovider/{service_provider_id}")
    public ResponseEntity<Optional<Transportprovider>> getTraProvide(@PathVariable Long service_provider_id);

    @PostMapping (path = "/senddata")
    public ResponseEntity<String> SendTripData (@RequestBody(required = true) Map<String, String> requestMap);

}

