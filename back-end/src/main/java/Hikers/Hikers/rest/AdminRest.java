package Hikers.Hikers.rest;

import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/admin")
public interface AdminRest {
    @GetMapping(path="/users")
    public ResponseEntity<List<User>> getAllUsers();

    @GetMapping(path="/getuserdetails/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id);

    @GetMapping(path="/gethotelsdetails")
    public ResponseEntity<List<Hotel>> getHotels();

    @GetMapping(path="/gethotelsdetails/{hotel_id}")
    public ResponseEntity<Optional<Hotel>> getHotel(@PathVariable Long hotel_id);

    @GetMapping(path="/getguides")
    public ResponseEntity<List<Travelingguide>> getGuides();

    @GetMapping(path="/getguide/{guide_id}")
    public ResponseEntity<Optional<Travelingguide>> getGuide(@PathVariable Long guide_id);

    @GetMapping(path="/gettraproviders")
    public  ResponseEntity<List<Transportprovider>> getTraproviders();

    @GetMapping(path="/gettraprovider/{service_provider_id}")
    public  ResponseEntity<List<Transportprovider>> getTraproviders(@PathVariable Long service_provider_id);
}
