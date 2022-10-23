package Hikers.Hikers.repository;

import Hikers.Hikers.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionRepo extends JpaRepository<Question,Long> {
        Optional<Question> findById(Long code);
}
