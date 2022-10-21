package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.model.User;
import com.sun.net.httpserver.Authenticator;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    @GetMapping(path="/accountconfirm/{code}")
    public ResponseEntity<?> verifyUser(@PathVariable String code);

    @GetMapping(path="/accountconfirmtravelguide/{code}")
    public ResponseEntity<?> verifyGuide(@PathVariable String code);

    @GetMapping(path = "/accountconfirmequprovider/{code}")
    public ResponseEntity<?> verifyEquprovider(@PathVariable String code);
    
    @PostMapping(path = "/forgotpassword")
    public ResponseEntity<?> forgotpassword(@RequestBody(required=true) Map<String, String> requestMap);
    
    @PostMapping(path="/changepassword/{id}")
    public ResponseEntity<String> changePassoword(@PathVariable("id") String id, @RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path="/getprofiledetails")
    public ResponseEntity<?> getprofiledetails();
}


