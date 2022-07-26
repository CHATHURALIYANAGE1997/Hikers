package Hikers.Hikers.repository;

import Hikers.Hikers.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo  extends JpaRepository<User,Long> {
    User findByEmail(@Param("email") String email);


    List<User> findAll();
}
