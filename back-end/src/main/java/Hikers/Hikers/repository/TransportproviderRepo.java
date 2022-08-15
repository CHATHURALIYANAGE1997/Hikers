package Hikers.Hikers.repository;


import Hikers.Hikers.model.Transportprovider;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface TransportproviderRepo extends JpaRepository<Transportprovider,Long> {
    
}
