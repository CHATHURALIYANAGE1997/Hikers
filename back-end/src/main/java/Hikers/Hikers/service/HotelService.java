package Hikers.Hikers.service;

import Hikers.Hikers.model.*;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface HotelService {
    ResponseEntity<List<Hotel>> getHotels();

    ResponseEntity<Optional<Hotel>> getHotel(Long hotel_id);

    ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap);

    ResponseEntity<Optional<Hotel>> getHotelProfile(String email);

//    ResponseEntity<Optional<Hotelfacilities>> getHotelFacilities(Long id);

    ResponseEntity<List<Hotelfacilities>> getHotelFacilities();

    ResponseEntity<List<Hotelrule>> getHotelRules();

    ResponseEntity<List<Hotelroom>> getRoom();

    ResponseEntity<List<Hotelpackage>> getPackage();

    ResponseEntity<List<Hotelbooking>> getBookings(Long hotel_id);
}
