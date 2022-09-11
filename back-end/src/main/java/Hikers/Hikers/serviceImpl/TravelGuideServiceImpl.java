package Hikers.Hikers.serviceImpl;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.repository.TravelingguideRepo;
import Hikers.Hikers.service.TravelGuideService;
import Hikers.Hikers.utils.Hutils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@Service
public class TravelGuideServiceImpl implements TravelGuideService {

    @Autowired
    private TravelingguideRepo travelingguideRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<List<Travelingguide>> getGuides() {
        try {
            return new ResponseEntity<>(travelingguideRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @Override
    public ResponseEntity<Optional<Travelingguide>> getGuide( Long guide_id){
        try{
            Optional<Travelingguide> travelingguide =travelingguideRepo.findById(guide_id);
            if(travelingguide.isPresent()){
                return new ResponseEntity(travelingguide, HttpStatus.OK);
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
            Travelingguide travelingguide=travelingguideRepo.findByVerificationCodeAndAccountstatusAndEnabled(id,"ture",true);
            if(id!=null && !Objects.isNull(travelingguide) && id.length()==72){
                travelingguide.setPassword(passwordEncoder.encode(requestMap.get("password")));
                travelingguide.setVerificationCode(null);
                travelingguideRepo.save(travelingguide);
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
    public ResponseEntity<Optional<Travelingguide>> getTravelingguideProfile(String email){
        try{
            Optional<Travelingguide> travelingguide = Optional.ofNullable(travelingguideRepo.findByEmail(email));
            if(travelingguide.isPresent()){
                return new ResponseEntity(travelingguide, HttpStatus.OK);
            }else{
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
