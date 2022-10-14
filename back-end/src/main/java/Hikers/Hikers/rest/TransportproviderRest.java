package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Hotelbooking;
import Hikers.Hikers.model.Transportprovider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/transport")
public interface TransportproviderRest {

    @GetMapping(path="/gettransport")
    public ResponseEntity<List<Transportprovider>> gettransport();

    @GetMapping(path = "/getTransporter/{email}")
    public ResponseEntity<Optional<Transportprovider>> getTrasnporter(@PathVariable String email);

}
