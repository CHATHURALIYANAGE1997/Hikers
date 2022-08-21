package Hikers.Hikers.restImpl;

import Hikers.Hikers.cons.Hcons;
import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import Hikers.Hikers.rest.UserRest;
import Hikers.Hikers.service.HotelService;
import Hikers.Hikers.service.TraProviderService;
import Hikers.Hikers.service.UserService;
import Hikers.Hikers.utils.Hutils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

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
    HotelService hotelService;

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private TraProviderService traProviderService;

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
<<<<<<< Updated upstream
               return Hutils.getResponseEntity(Hcons.ACCESS_DINAED,HttpStatus.UNAUTHORIZED);
           }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }
=======
                return Hutils.getResponseEntity(Hcons.ACCESS_DINAED,HttpStatus.UNAUTHORIZED);
            }
=======
            @Override
            public ResponseEntity<String> SendTripData(Map<String, String> requestMap) {
                try {
                    return userService.SendTripData(requestMap);
>>>>>>> Stashed changes
                }catch (Exception ex){
                    ex.printStackTrace();
                }
                return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
            }
<<<<<<< Updated upstream
>>>>>>> Stashed changes

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

        }
<<<<<<< Updated upstream
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


}
=======
=======
    }
>>>>>>> Stashed changes
>>>>>>> Stashed changes
