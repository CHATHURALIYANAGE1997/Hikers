package Hikers.Hikers.repository;

import Hikers.Hikers.model.Travelingguide;
import Hikers.Hikers.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravelingguideRepo extends JpaRepository<Travelingguide,Long> {
   Travelingguide  findByEmail(@Param("email") String email);

   Travelingguide findByContactNumber(@Param("contactNumber") String contactNumber);

   List<Travelingguide> findAll();

   Travelingguide findByVerificationCode( String code);
   
   Travelingguide findByEmailAndAccountstatusAndEnabled(String email,String accountstatus,Boolean enabled);
   
   Travelingguide findByVerificationCodeAndAccountstatusAndEnabled(String id, String ture, boolean enabled);
}
