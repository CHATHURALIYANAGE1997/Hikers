package Hikers.Hikers.restImpl;

import Hikers.Hikers.cons.Hcons;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.rest.TransportproviderRest;
import Hikers.Hikers.service.TraProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class TransportproviderRestImpl implements TransportproviderRest {

    @Autowired
    TraProviderService traProviderService;

    @Override
    public ResponseEntity<List<Transportprovider>> gettransport() {
        try{
            return traProviderService.gettransport();
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<Optional<Transportprovider>> getTrasnporter(String email){
        try{
            return traProviderService.getTransporterProfile(email);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> addratetotranspoter(String code, Map<String, String> requestMap) {
            try{
                return traProviderService.addratetotranspoter(code,requestMap);
            }catch (Exception ex){
                ex.printStackTrace();
            }
            return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
