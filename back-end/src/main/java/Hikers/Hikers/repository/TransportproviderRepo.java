package Hikers.Hikers.repository;


import Hikers.Hikers.model.Transportprovider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TransportproviderRepo extends JpaRepository<Transportprovider,Long> {
    Transportprovider findByEmail(@Param("email") String email);

    Transportprovider findByContactNumber(@Param("contactNumber") String contactNumber);
    
    Transportprovider findByEmailAndAccountstatus(String email,String accountstatus);
    
    Transportprovider findByVerificationCodeAndAccountstatus(String id, String ture);


}
