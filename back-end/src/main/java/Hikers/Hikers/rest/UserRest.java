package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    
    @PostMapping(path="/uploadFile")
    public  ResponseEntity<?> uploadprofile(@RequestParam("file") MultipartFile file);

    @GetMapping(path="/verifyGuideByAdmin/{code}")
    public  ResponseEntity<?> verifyGuideByAdmin(@PathVariable String code);

    @GetMapping(path="/RejectGuideByAdmin/{code}")
    public  ResponseEntity<?> RejectGuideByAdmin(@PathVariable String code);

    @GetMapping(path="/verifyEquproviderByAdmin/{code}")
    public  ResponseEntity<?> verifyEquproviderByAdmin(@PathVariable String code);

    @GetMapping(path="/RejectEquproviderByAdmin/{code}")
    public  ResponseEntity<?> RejectEquproviderByAdmin(@PathVariable String code);

    @GetMapping(path="/suggetionguide")
    public  ResponseEntity<?> suggetionguide();

    @GetMapping(path="/suggetiontransport")
    public  ResponseEntity<?> suggetiontransport();

    @PostMapping(path="/askque")
    public ResponseEntity<?> askque(@RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path="/allquestions")
    public  ResponseEntity<?> allquestions();

    @PostMapping(path="/replay/{code}")
    public ResponseEntity<?> replay(@PathVariable Long code ,@RequestBody(required=true) Map<String, String> requestMap);

    @PostMapping(path="/volientier")
    public ResponseEntity<?> volientier(@RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path="/getvolientiers")
    public ResponseEntity<?> getvolientiers();

    @PostMapping(path="/volientierprograms")
    public ResponseEntity<?> volientierprograms(@RequestBody(required=true) Map<String, String> requestMap);
    
    @GetMapping(path="/getquestionsnew")
    public ResponseEntity<?> getquestionsnew();

    @GetMapping(path="/updatequestionstatus/{code}")
    public ResponseEntity<?> updatequestionstatus(@PathVariable(required = true) Long code);

    @PostMapping(path="/addarticles")
    public ResponseEntity<?> addarticles(@RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path="/deletearticles/{code}")
    public ResponseEntity<?> deletearticles(@PathVariable(required = true) Long code);

    @GetMapping(path = "/getarticles")
    public ResponseEntity<?> getarticles();

    @PostMapping(path="/plantrip")
    public ResponseEntity<?> plantrip(@RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path = "/assignguideandtran/{code,code1,code2}")
    public ResponseEntity<?> assignguideandtran(@PathVariable(required = true) Long code,Long code1,Long code2);

}


