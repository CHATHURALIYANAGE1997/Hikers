package Hikers.Hikers.repository;

import Hikers.Hikers.model.Hotelroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HotelroomRepo extends JpaRepository<Hotelroom,Long> {

//    Hotelroom findAllById(@Param("id") Long id);
//
//    Hotelroom findAllByHotel_id(@Param("id") Long id);
//
//    Hotelroom findByRoom_id(Long id);


//    List<Hotelroom> findAll();
   Hotelroom findByHotelidAndRoomtype( String hotel_id,String room_type);


}
