package Hikers.Hikers.repository;

import Hikers.Hikers.model.Hotelbooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface HotelbookingRepo extends JpaRepository<Hotelbooking, Long> {

//    Optional<Hotelbooking> findByHotel_id(@Param("hotel_id") Long id);

}
