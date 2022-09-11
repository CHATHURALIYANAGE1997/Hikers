package Hikers.Hikers.service;

import Hikers.Hikers.model.Hotelroom;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;

public interface HotelroomService {

//    ResponseEntity<Optional<Hotelroom>> getHotelRooms(Long id);
    ResponseEntity<List<Hotelroom>> getAllRooms();


}
