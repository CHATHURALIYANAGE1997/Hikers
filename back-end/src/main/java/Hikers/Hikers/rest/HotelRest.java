package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/hotel")
public interface HotelRest {
  
    @PostMapping(path="/changepassword/{id}")
    public ResponseEntity<String> changePassoword(@PathVariable("id") String id, @RequestBody(required=true) Map<String, String> requestMap);

    @GetMapping(path="/getHotelProfile/{email}")
    public ResponseEntity<Optional<Hotel>> getHotelProfile(@PathVariable String email);
}
