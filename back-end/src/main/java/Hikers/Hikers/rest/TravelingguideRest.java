package Hikers.Hikers.rest;

import Hikers.Hikers.model.Travelingguide;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins =  "http://localhost:3000")
@RequestMapping(path = "/travelingguide")
public interface TravelingguideRest {

    @GetMapping(path = "/getTransportProfile/{email}")
    public ResponseEntity<Optional<Travelingguide>> getTravelingguideProfile(@PathVariable String email);

}
