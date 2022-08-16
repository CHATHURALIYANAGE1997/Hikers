package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.repository.TravelingguideRepo;
import Hikers.Hikers.service.TravelGuideService;
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
public class TravelGuideServiceImpl implements TravelGuideService {

    @Autowired
    private TravelingguideRepo travelingguideRepo;

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
}
