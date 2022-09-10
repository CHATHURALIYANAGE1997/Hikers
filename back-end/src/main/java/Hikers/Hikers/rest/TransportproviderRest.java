package Hikers.Hikers.rest;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/transport")
public interface TransportproviderRest {

    @GetMapping(path="/gettransport")
    public ResponseEntity<List<Transportprovider>> gettransport();

}
