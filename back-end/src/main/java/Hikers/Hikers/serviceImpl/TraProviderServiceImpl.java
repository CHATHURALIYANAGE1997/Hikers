package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.repository.TransportproviderRepo;
import Hikers.Hikers.service.TraProviderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class TraProviderServiceImpl implements TraProviderService {

    @Autowired
    private TransportproviderRepo transportproviderRepo;

    @Autowired
    private JwtFilter jwtFilter;


    @Override
    public ResponseEntity<List<Transportprovider>> getTraproviders() {
        try {
            return new ResponseEntity<>(transportproviderRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Transportprovider>> getTraprovider(Long service_provider_id) {
        try {
            Optional<Transportprovider> transportprovider=transportproviderRepo.findById(service_provider_id);
            if(transportprovider.isPresent()){
                return new ResponseEntity(transportprovider, HttpStatus.OK);
            }else{
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
