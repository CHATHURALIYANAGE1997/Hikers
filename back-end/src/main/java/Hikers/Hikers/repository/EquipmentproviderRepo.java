package Hikers.Hikers.repository;

import Hikers.Hikers.model.Equipmentprovider;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentproviderRepo extends JpaRepository<Equipmentprovider,Long> {

   
}
