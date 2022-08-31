package Hikers.Hikers.repository;

import Hikers.Hikers.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepo extends JpaRepository<Hotel,Long> {
    Hotel findByEmail(@Param("email") String email);

    Hotel findByContactNumber(@Param("contactNumber") String contactNumber);
    
    Hotel findByEmailAndAccountstatus(String email,String accountstatus);
    
    Hotel findByVerificationCode(@Param("verificationcode") String verificationcode);
}

