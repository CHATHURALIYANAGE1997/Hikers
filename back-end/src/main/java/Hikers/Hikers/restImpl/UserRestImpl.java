package Hikers.Hikers.restImpl;

import Hikers.Hikers.cons.Hcons;
import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.rest.UserRest;
import Hikers.Hikers.service.*;
import Hikers.Hikers.utils.Hutils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController("/user")
public class UserRestImpl implements UserRest {
    @Autowired
    private UserService userService;

    @Autowired
    private HotelService hotelService;

    @Autowired
    private EquipmentproviderService equipmentproviderService;

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private TraProviderService traProviderService;

    @Autowired
   private TravelGuideService travelGuideService;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap ) {
        try {

            return userService.signUp(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> signUphotel(Map<String, String> requestMap) {
        try {
            return userService.signUpHotel(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> signUptransportprovider(Map<String, String> requestMap) {
        try {
            return userService.signUpTransportProvider(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> signUpequipmentprovider(Map<String, String> requestMap) {
        try {
            return userService.signUpEquipmentProvider(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> signUptraveling(Map<String, String> requestMap) {
        try {
            return userService.signUpTravelingguide(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Override
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        try {

            return userService.login(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> addCoAdmin(Map<String, String> requestMap) {
        try {
            if(jwtFilter.isAdmin() || jwtFilter.isCoAdmin()) {
                return userService.signUp(requestMap);
            }else {
                return Hutils.getResponseEntity(Hcons.ACCESS_DINAED,HttpStatus.UNAUTHORIZED);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> userprofile() {
        try {
            return userService.userProfile();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotel>> gethotels() {
        try{
            return hotelService.getHotels();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
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
    public ResponseEntity<Optional<Transportprovider>> getTraProvide(Long service_provider_id) {
        try{
            return userService.getTraProvide(service_provider_id);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> verifyUser(String code) {
        try {
            return userService.verifyUser(code);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> verifyGuide(String code) {
       try {
           return userService.verifyGuide(code);
       }catch (Exception ex){
           ex.printStackTrace();
       }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> verifyEquprovider(String code) {
       try {
           return userService.verifyEquprovider(code);
       }catch (Exception ex){
           ex.printStackTrace();
       }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> forgotpassword(Map<String, String> requestMap) {
        try {
            return userService.forgotpassword(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap) {
        try {
            if(id.length()==64){
                return userService.changePassoword(id,requestMap);
            }else if(id.length()==68){
                return equipmentproviderService.changePassoword(id,requestMap);
            }else if(id.length()==72){
                return travelGuideService.changePassoword(id,requestMap);
            }else if(id.length()==76){
                return hotelService.changePassoword(id,requestMap);
            }else if(id.length()==80){
                return traProviderService.changePassoword(id,requestMap);
            }else {
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> getprofiledetails() {
        try {
            return  userService.getUser();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> uploadprofile(MultipartFile file) {
        try {
            return  userService.uploadprofile(file);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> verifyGuideByAdmin(String code) {
        try {
            return userService.verifyGuideByAdmin(code);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> RejectGuideByAdmin(String code) {
        try {
            return userService.RejectGuideByAdmin(code);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> verifyEquproviderByAdmin(String code) {
        try {
            System.out.println("dfdf");
            return userService.verifyEquproviderByAdmin(code);
        }catch (Exception ex){
        ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> RejectEquproviderByAdmin(String code) {
        try {
            return userService.RejectEquproviderByAdmin(code);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }
}
