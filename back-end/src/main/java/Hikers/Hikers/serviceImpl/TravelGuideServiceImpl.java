package Hikers.Hikers.serviceImpl;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
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

    @Override
    public ResponseEntity<List<Travelingguide>> getAllGuide(){
        try{
            return new ResponseEntity<>(travelingguideRepo.findAll(), HttpStatus.OK);
        } catch (Exception ex){
            ex.printStackTrace();
        }

        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> addratetoguide(String code, Map<String, String> requestMap) {
        try{
            Travelingguide travelingguide=travelingguideRepo.findByEmail(code);
            int count=Integer.parseInt(travelingguide.getCount());
            int newcount=count+1;
            if(count==0){
                travelingguide.setCommunication(requestMap.get("communication"));
                travelingguide.setDomainknowledge(requestMap.get("domainknowledge"));
                travelingguide.setPunctuality(requestMap.get("punctuality"));
                travelingguide.setSecurity(requestMap.get("security"));
                travelingguide.setCommunicationoverrall(requestMap.get("communication"));
                travelingguide.setDomainknowledgeoverrall(requestMap.get("domainknowledge"));
                travelingguide.setPunctualityoverrall(requestMap.get("punctuality"));
                travelingguide.setSecurityoverrall(requestMap.get("security"));

                int overrall=(Integer.parseInt(requestMap.get("communication"))+Integer.parseInt(requestMap.get("domainknowledge"))+Integer.parseInt(requestMap.get("punctuality"))+Integer.parseInt(requestMap.get("security")))/4;

                travelingguide.setOverrall(String.valueOf(overrall));
                travelingguide.setCount(String.valueOf(newcount));
                travelingguideRepo.save(travelingguide);
                return Hutils.getResponseEntity("Add perfamance successfuly", HttpStatus.OK);
            }else {
                int Communication=((Integer.parseInt(travelingguide.getCommunicationoverrall()))*count+Integer.parseInt(requestMap.get("communication")))/newcount;
                int Domainknowledge=((Integer.parseInt(travelingguide.getDomainknowledgeoverrall()))*count+Integer.parseInt(requestMap.get("domainknowledge")))/newcount;
                int Punctuality=((Integer.parseInt(travelingguide.getPunctualityoverrall()))*count+Integer.parseInt(requestMap.get("punctuality")))/newcount;
                int Security=((Integer.parseInt(travelingguide.getSecurityoverrall()))*count+Integer.parseInt(requestMap.get("security")))/newcount;

                travelingguide.setCommunication(requestMap.get("communication"));
                travelingguide.setDomainknowledge(requestMap.get("domainknowledge"));
                travelingguide.setPunctuality(requestMap.get("punctuality"));
                travelingguide.setSecurity(requestMap.get("security"));

                travelingguide.setCommunicationoverrall(String.valueOf(Communication));
                travelingguide.setDomainknowledgeoverrall(String.valueOf(Domainknowledge));
                travelingguide.setPunctualityoverrall(String.valueOf(Punctuality));
                travelingguide.setSecurityoverrall(String.valueOf(Security));
                int overrall=(Communication+Domainknowledge+Punctuality+Security);
                travelingguide.setOverrall(String.valueOf(overrall));
                travelingguide.setCount(String.valueOf(newcount));
                travelingguideRepo.save(travelingguide);
                return Hutils.getResponseEntity("Add perfamance successfuly", HttpStatus.OK);
            }
        } catch (Exception ex){
            ex.printStackTrace();
        }

        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
