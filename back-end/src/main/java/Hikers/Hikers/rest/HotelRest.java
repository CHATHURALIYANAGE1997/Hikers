package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Hotelfacilities;
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
//    public ResponseEntity<List<Hotelfacilities>> getHotelFacilities(@PathVariable Long hotel_id);
    public ResponseEntity<List<Hotelfacilities>> getHotelFacilities();

}
