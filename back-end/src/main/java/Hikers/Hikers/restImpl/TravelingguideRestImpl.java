package Hikers.Hikers.restImpl;

import Hikers.Hikers.cons.Hcons;
import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.rest.HotelRest;
import Hikers.Hikers.rest.TravelingguideRest;
import Hikers.Hikers.service.HotelService;
import Hikers.Hikers.service.TravelGuideService;
import Hikers.Hikers.utils.Hutils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

@RestController("/travelingguide")
public class TravelingguideRestImpl implements TravelingguideRest {

    @Autowired
    TravelGuideService travelGuideService;

    @Override
    public ResponseEntity<Optional<Travelingguide>> getTravelingguideProfile(String email){
        try {
            return travelGuideService.getTravelingguideProfile(email);
        } catch (Exception ex){
            ex.printStackTrace();
        }

        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }
}
