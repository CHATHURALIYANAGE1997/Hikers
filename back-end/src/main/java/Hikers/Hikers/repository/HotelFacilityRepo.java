package Hikers.Hikers.repository;

import Hikers.Hikers.model.Hotelfacilities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HotelFacilityRepo extends JpaRepository<Hotelfacilities, Long> {

    Optional<Hotelfacilities> findById(@Param("id") Long id);
    List<Hotelfacilities> findAll();

}
