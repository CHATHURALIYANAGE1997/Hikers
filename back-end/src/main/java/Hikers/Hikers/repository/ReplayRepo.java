package Hikers.Hikers.repository;


import Hikers.Hikers.model.Replay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReplayRepo extends JpaRepository<Replay,Long> {

}
