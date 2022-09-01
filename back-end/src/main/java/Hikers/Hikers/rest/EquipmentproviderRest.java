package Hikers.Hikers.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/equprovider")
public interface EquipmentproviderRest {
    @PostMapping(path="/changepassword/{id}")
    public ResponseEntity<String> changePassoword(@PathVariable("id") String id, @RequestBody(required=true) Map<String, String> requestMap);
}
