package Hikers.Hikers.repository;

import Hikers.Hikers.model.Hotelrule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelruleRepo extends JpaRepository<Hotelrule, Long> {



}
