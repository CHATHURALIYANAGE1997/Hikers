package Hikers.Hikers.repository;

import Hikers.Hikers.model.Travelingguide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravelingguideRepo extends JpaRepository<Travelingguide,Long> {
   
}
