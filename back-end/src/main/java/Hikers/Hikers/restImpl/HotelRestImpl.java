package Hikers.Hikers.restImpl;

import Hikers.Hikers.cons.Hcons;
import Hikers.Hikers.model.*;
import Hikers.Hikers.rest.HotelRest;
import Hikers.Hikers.service.HotelService;
import Hikers.Hikers.utils.Hutils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController("/hotel")
public class HotelRestImpl implements HotelRest {

    @Autowired
    HotelService hotelService;

    @Override
    public ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap) {
        try {
            return hotelService.changePassoword(id,requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<Optional<Hotel>> getHotelProfile(String email) {
        try{
            return hotelService.getHotelProfile(email);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

//    @Override
//    public ResponseEntity<Optional<Hotelfacilities>> getHotelFacilities(Long id){
//        try{
//            return hotelService.getHotelFacilities(id);
//        } catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
//    }

    @Override
    public ResponseEntity<List<Hotelfacilities>> getHotelFacilities(){
        try{
            return hotelService.getHotelFacilities();
        } catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotelrule>> getHotelRules(){
        try{
            return hotelService.getHotelRules();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotelroom>> getRoom(){
        try{
            return hotelService.getRoom();
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotelpackage>> getPackage(){
        try{
            return hotelService.getPackage();
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotelbooking>> getBookings(Long hotel_id){
        try{
            return hotelService.getBookings(hotel_id);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

}



