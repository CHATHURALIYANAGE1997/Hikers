package Hikers.Hikers.service;

import Hikers.Hikers.model.Travelingguide;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface TravelGuideService {
    ResponseEntity<List<Travelingguide>> getGuides();

    ResponseEntity<Optional<Travelingguide>> getGuide(Long guide_id);
    
    ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap);

    ResponseEntity<Optional<Travelingguide>> getTravelingguideProfile(String email);
}
