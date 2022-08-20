package Hikers.Hikers.repository;

import Hikers.Hikers.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo  extends JpaRepository<User,Long> {

    User findByEmail(@Param("email") String email);

    User findByContactNumber(@Param("contactNumber") String contactNumber);

    List<User> findAll();

    List<User> findByRole(@Param("role") String role);

    Optional<User> findById(@Param("id") Long id);

    User findByVerificationCode( String code);
}

