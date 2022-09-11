package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.model.Hotelroom;
import Hikers.Hikers.repository.HotelroomRepo;
import Hikers.Hikers.service.HotelroomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import java.util.*;
import java.util.List;

@Slf4j
@Service
public class HotelroomServiceImpl implements HotelroomService {

    @Autowired
    private HotelroomRepo hotelroomRepo;

//    @Override
//    public ResponseEntity<Optional<Hotelroom>> getHotelRooms(Long id){
//        try{
////            Optional<Hotelroom> hotelroom = Optional.ofNullable(hotelroomRepo.findByRoom_id(id));
//            Optional<Hotelroom> hotelroom = Optional.ofNullable(hotelroomRepo.findAllById(id));
//
//            if(hotelroom.isPresent()){
//                return new ResponseEntity(hotelroom, HttpStatus.OK);
//            }else{
//                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
//            }
//        }catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
//    }
    @Override
    public ResponseEntity<List<Hotelroom>> getAllRooms(){
        try{
            return new ResponseEntity(hotelroomRepo.findAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
