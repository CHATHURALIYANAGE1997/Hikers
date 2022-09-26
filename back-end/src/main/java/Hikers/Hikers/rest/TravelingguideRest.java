package Hikers.Hikers.rest;

import Hikers.Hikers.model.Travelingguide;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins =  "http://localhost:3000")
@RequestMapping(path = "/travelingguide")
public interface TravelingguideRest {

    @GetMapping(path = "/getTransportProfile/{email}")
    public ResponseEntity<Optional<Travelingguide>> getTravelingguideProfile(@PathVariable String email);

    @GetMapping(path = "/getAllGuide")
    public ResponseEntity<List<Travelingguide>> getAllGuide();

}
