package Hikers.Hikers.restImpl;

import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.model.User;
import Hikers.Hikers.rest.AdminRest;
import Hikers.Hikers.service.HotelService;
import Hikers.Hikers.service.TraProviderService;
import Hikers.Hikers.service.TravelGuideService;
import Hikers.Hikers.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController("/admin")
public class AdminRestImpl implements AdminRest {
    @Autowired
    private UserService userService;

    @Autowired
    private HotelService hotelService;

    @Autowired
    private TravelGuideService travelGuideService;

    @Autowired
    private TraProviderService traProviderService;

    @Autowired
    private JwtFilter jwtFilter;

    @Override
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            return userService.getAllUsers();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<List<User>>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        try {
            return userService.getUser( id);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<List<Hotel>> getHotels() {
        try{
            return hotelService.getHotels();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<Optional<Hotel>> getHotel(Long hotel_id) {
        try{
            return hotelService.getHotel(hotel_id);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<List<Travelingguide>> getGuides() {
        try{
           return travelGuideService.getGuides();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<Optional<Travelingguide>> getGuide(Long guide_id) {
        try{
            return travelGuideService.getGuide(guide_id);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<List<Transportprovider>> getTraproviders() {
        return null;
    }

    @Override
    public ResponseEntity<List<Transportprovider>> getTraproviders(Long service_provider_id) {
        try{
            return traProviderService.getTraprovider(service_provider_id);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }
}
