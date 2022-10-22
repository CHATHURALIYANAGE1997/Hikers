package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Hotelbooking;
import Hikers.Hikers.model.Transportprovider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/transport")
public interface TransportproviderRest {

    @GetMapping(path="/gettransport")
    public ResponseEntity<List<Transportprovider>> gettransport();

    @GetMapping(path = "/getTransporter/{email}")
    public ResponseEntity<Optional<Transportprovider>> getTrasnporter(@PathVariable String email);

    @PostMapping(path="/addratetotranspoter/{code}")
    public ResponseEntity<?> addratetotranspoter(@PathVariable String code,@RequestBody(required=true) Map<String, String> requestMap);
}
