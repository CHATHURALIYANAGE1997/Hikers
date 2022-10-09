package Hikers.Hikers.repository;

import Hikers.Hikers.model.Hotelpackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelpackageRepo extends JpaRepository<Hotelpackage, Long> {



}
