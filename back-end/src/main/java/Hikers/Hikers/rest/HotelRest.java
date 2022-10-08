package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Hotelfacilities;
import Hikers.Hikers.model.Hotelrule;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/hotel")
public interface HotelRest {
  
    @PostMapping(path="/changepassword/{id}")
    public ResponseEntity<String> changePassoword(@PathVariable("id") String id, @RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path="/getHotelProfile/{email}")
    public ResponseEntity<Optional<Hotel>> getHotelProfile(@PathVariable String email);

    @GetMapping(path="/getHotelFacility")
    public ResponseEntity<List<Hotelfacilities>> getHotelFacilities();

//    @GetMapping(path = "/getHotelFacility/{id}")
//    public ResponseEntity<Optional<Hotelfacilities>> getHotelFacilities(@PathVariable Long id);

    @GetMapping(path = "/getHotelRules")
    public ResponseEntity<List<Hotelrule>> getHotelRules();

}
