package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.repository.TransportproviderRepo;
import Hikers.Hikers.service.TraProviderService;
import Hikers.Hikers.utils.Hutils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@Slf4j
@Service
public class TraProviderServiceImpl implements TraProviderService {

    @Autowired
    private TransportproviderRepo transportproviderRepo;

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private PasswordEncoder passwordEncoder;


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

    @Override
    public ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap) {
        try {
            Transportprovider transportprovider=transportproviderRepo.findByVerificationCodeAndAccountstatus(id,"ture");
            if(id!=null && !Objects.isNull(transportprovider) && id.length()==80){
                transportprovider.setPassword(passwordEncoder.encode(requestMap.get("password")));
                transportprovider.setVerificationCode(null);
                transportproviderRepo.save(transportprovider);
                return Hutils.getResponseEntity("Password changed", HttpStatus.OK);
            }
            else{
                return Hutils.getResponseEntity("Unvalid Reqeust", HttpStatus.BAD_REQUEST);
            }

        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Transportprovider>> gettransport(){
        try{
            return new ResponseEntity<>(transportproviderRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<Optional<Transportprovider>> getTransporterProfile(String email){
        try{
            Optional<Transportprovider> transporter = Optional.ofNullable(transportproviderRepo.findByEmail(email));
            if (transporter.isPresent()){
                return new ResponseEntity(transporter, HttpStatus.OK);
            } else {
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex){
            ex.printStackTrace();
        }

        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}