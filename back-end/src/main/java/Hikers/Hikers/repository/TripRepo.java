package Hikers.Hikers.repository;

import Hikers.Hikers.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRepo extends JpaRepository <Trip, Long> {
Trip findAllId(Long id);
}
