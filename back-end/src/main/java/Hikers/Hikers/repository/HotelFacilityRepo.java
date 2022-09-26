package Hikers.Hikers.repository;

import Hikers.Hikers.model.Hotelfacilities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelFacilityRepo extends JpaRepository<Hotelfacilities, Long> {

//    Hotelfacilities findByHotel_id(@Param("hotel_id") Long hotel_id);
    List<Hotelfacilities> findAll();

}
