package Hikers.Hikers.restImpl;

import Hikers.Hikers.rest.EquipmentproviderRest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController("/equprovider")
public class EquipmentproviderRestImpl implements EquipmentproviderRest {

    @Override
    public ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap) {
        return null;
    }
}
