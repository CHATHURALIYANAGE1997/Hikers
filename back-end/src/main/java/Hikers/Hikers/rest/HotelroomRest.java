package Hikers.Hikers.rest;

import Hikers.Hikers.model.Hotelroom;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/hotelroom")
public interface HotelroomRest {

//    @GetMapping(path= "/getHotelRooms/{id}")
//    public ResponseEntity<Optional<Hotelroom>> getHotelRooms(@PathVariable Long id);

    @GetMapping(path= "/getAllRooms/")
    public ResponseEntity<List<Hotelroom>> getAllRooms();


}
