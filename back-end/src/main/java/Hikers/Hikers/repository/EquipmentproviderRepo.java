package Hikers.Hikers.repository;

import Hikers.Hikers.model.Equipmentprovider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentproviderRepo extends JpaRepository<Equipmentprovider,Long> {

    Equipmentprovider findByEmail(@Param("email") String email);
    Equipmentprovider findByContactNumber(@Param("contactNumber") String contactNumber);
    Equipmentprovider findByVerificationCode(@Param("verificationCode") String verificationCode);
}
