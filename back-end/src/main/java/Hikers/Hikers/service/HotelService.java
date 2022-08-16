package Hikers.Hikers.service;

import Hikers.Hikers.model.Hotel;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;

public interface HotelService {
    ResponseEntity<List<Hotel>> getHotels();

    ResponseEntity<Optional<Hotel>> getHotel(Long hotel_id);

}
