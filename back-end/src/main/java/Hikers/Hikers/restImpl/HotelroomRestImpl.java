package Hikers.Hikers.restImpl;

import Hikers.Hikers.model.Hotelroom;
import Hikers.Hikers.rest.HotelroomRest;
import Hikers.Hikers.service.HotelroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController("/hotelroom")
public class HotelroomRestImpl implements HotelroomRest {

    @Autowired
    HotelroomService hotelroomService;

//    @Override
//    public ResponseEntity<Optional<Hotelroom>> getHotelRooms(Long id){
//        try{
//            return hotelroomService.getHotelRooms(id);
//        }catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
//    }

    @Override
    public ResponseEntity<List<Hotelroom>> getAllRooms(){
        try{
            return hotelroomService.getAllRooms();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

}
