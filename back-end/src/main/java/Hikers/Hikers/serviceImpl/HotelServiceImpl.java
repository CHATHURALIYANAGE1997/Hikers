package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.model.*;
import Hikers.Hikers.repository.*;
import Hikers.Hikers.service.HotelService;
import Hikers.Hikers.utils.Hutils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.Optional;

@Slf4j
@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelRepo hotelRepo;

    @Autowired
    private HotelFacilityRepo hotelFacilityRepo;

    @Autowired
    private HotelruleRepo hotelruleRepo;

    @Autowired
    HotelroomRepo hotelroomRepo;

    @Autowired
    HotelpackageRepo hotelpackageRepo;

    @Autowired
    HotelbookingRepo hotelbookingRepo;

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private UserRepo userRepo;

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

    @Override
    public ResponseEntity<Optional<Hotel>> getHotelProfile(String email){
        try{
            Optional<Hotel> hotel = Optional.ofNullable(hotelRepo.findByEmail(email));
            if(hotel.isPresent()){
                return new ResponseEntity(hotel, HttpStatus.OK);
            }else{
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

//    @Override
//    public ResponseEntity<Optional<Hotelfacilities>> getHotelFacilities(Long id){
//        try{
//            Optional <Hotelfacilities> hotelfacility = hotelFacilityRepo.findById(id);
//            if(hotelfacility.isPresent()){
//                return new ResponseEntity(hotelfacility, HttpStatus.OK);
//            } else {
//                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
//            }
//        }catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
//    }

    @Override
    public ResponseEntity<List<Hotelfacilities>> getHotelFacilities(){
        try{
            return new ResponseEntity<>(hotelFacilityRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @Override
    public ResponseEntity<List<Hotelrule>> getHotelRules(){
        try{
            return new ResponseEntity<>(hotelruleRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotelroom>> getRoom(){
        try{
            return new ResponseEntity<>(hotelroomRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotelpackage>> getPackage(){
        try{
            return new ResponseEntity<>(hotelpackageRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Hotelbooking>> getBookings(Long hotel_id){
//        try{
//            Optional<Hotelbooking> hotelbooking = hotelbookingRepo.findByHotel_id(hotel_id);
//            if(hotelbooking.isPresent()){
//                return new ResponseEntity(hotelbooking, HttpStatus.OK);
//            } else {
//                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
//            }
//        } catch (Exception ex){
//            ex.printStackTrace();
//        }
        try{
            List<Hotelbooking> hotelbooking = hotelbookingRepo.findAll();
            if(! hotelbooking.isEmpty()){
                return new ResponseEntity(hotelbooking, HttpStatus.OK);
            } else {
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> hotelbooking(Map<String, String> requestMap) {
        try{
            if(!Objects.isNull(requestMap)){
                Hotelbooking hotelbooking=new Hotelbooking();
                hotelbooking.setHotel_id(Long.parseLong(requestMap.get("hotelid")));
                User user=userRepo.findByEmail(jwtFilter.getCurrentUser());
                hotelbooking.setUser_id(user.getId());
                hotelbooking.setFirstname(user.getFirstname());
                hotelbooking.setLastname(user.getLastname());
                Date date = Calendar.getInstance().getTime();
                DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");
                String strDate = dateFormat.format(date);
                hotelbooking.setDate(strDate);
                hotelbooking.setCrowd(requestMap.get("crowd"));
                String sin="Single bed";
                String dou="Double bed";
                String tre="Trible bed";
                Hotelroom hotelroom=hotelroomRepo.findByHotel_idAndRoom_type(requestMap.get("hotel_id"),sin);
                Hotelroom hotelroom1=hotelroomRepo.findByHotel_idAndRoom_type(requestMap.get("hotel_id"),dou);
                Hotelroom hotelroom2=hotelroomRepo.findByHotel_idAndRoom_type(requestMap.get("hotel_id"),tre);
                int singlebedroomprice=Integer.parseInt(hotelroom.getAmount());
                int doublebedroomprice=Integer.parseInt(hotelroom1.getAmount());
                int triblebedroomprice=Integer.parseInt(hotelroom2.getAmount());
                int siglebedcount=Integer.parseInt(requestMap.get("Singlebed"));
                int doublebedcount=Integer.parseInt(requestMap.get("Doublebed"));
                int triblebedcount=Integer.parseInt(requestMap.get("Triblebed"));

                int totalamount=singlebedroomprice*siglebedcount+doublebedroomprice*doublebedcount+triblebedcount*triblebedroomprice;
                hotelbooking.setPayment(String.valueOf(totalamount));
                hotelbooking.setPayment(requestMap.get("payment"));
                hotelbooking.setCheckindate(requestMap.get("checkindate"));
                hotelbooking.setCheckoutdate(requestMap.get("checkoutdate"));
                hotelbooking.setStatus("false");
                hotelbooking.setSingalbed(String.valueOf(siglebedcount));
                hotelbooking.setDoublebed(String.valueOf(doublebedcount));
                hotelbooking.setTriblebed(String.valueOf(triblebedcount));
                hotelbookingRepo.save(hotelbooking);
                return Hutils.getResponseEntity("second part successfully", HttpStatus.OK);
            }else {
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
