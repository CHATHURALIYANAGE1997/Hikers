package Hikers.Hikers.repository;

import Hikers.Hikers.model.User;
import Hikers.Hikers.model.VolientierPrograms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolientierprogramsRepo extends JpaRepository<VolientierPrograms,Long> {

}
