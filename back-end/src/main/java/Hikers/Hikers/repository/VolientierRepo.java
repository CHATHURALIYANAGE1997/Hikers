package Hikers.Hikers.repository;



import Hikers.Hikers.model.Volientier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolientierRepo extends JpaRepository<Volientier,Long> {

}
