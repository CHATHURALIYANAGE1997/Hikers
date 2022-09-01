package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.repository.HotelRepo;
import Hikers.Hikers.service.HotelService;
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
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelRepo hotelRepo;

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public ResponseEntity<List<Hotel>> getHotels() {
        try {
                return new ResponseEntity<>(hotelRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<Optional<Hotel>> getHotel(Long hotel_id) {
       try {
           Optional<Hotel> hotel=hotelRepo.findById(hotel_id);
           if(hotel.isPresent()){
               return new ResponseEntity(hotel, HttpStatus.OK);
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
            Hotel hotel=hotelRepo.findByVerificationCodeAndAccountstatus(id,"ture");
            if(id!=null && !Objects.isNull(hotel) && id.length()==76){
                hotel.setPassword(passwordEncoder.encode(requestMap.get("password")));
                hotel.setVerificationCode(null);
                hotelRepo.save(hotel);
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
}
