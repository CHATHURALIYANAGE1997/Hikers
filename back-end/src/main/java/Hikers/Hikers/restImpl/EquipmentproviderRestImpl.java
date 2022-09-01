package Hikers.Hikers.restImpl;

import Hikers.Hikers.cons.Hcons;
import Hikers.Hikers.rest.EquipmentproviderRest;
import Hikers.Hikers.service.EquipmentproviderService;
import Hikers.Hikers.utils.Hutils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController("/equprovider")
public class EquipmentproviderRestImpl implements EquipmentproviderRest {

    @Autowired
    private EquipmentproviderService equipmentproviderService;

    @Override
    public ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap) {
        try {
            return equipmentproviderService.changePassoword(id,requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

