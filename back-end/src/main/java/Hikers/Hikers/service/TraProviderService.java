package Hikers.Hikers.service;


import Hikers.Hikers.model.Hotel;
import Hikers.Hikers.model.Transportprovider;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface TraProviderService {
    ResponseEntity<List<Transportprovider>> getTraproviders();

    ResponseEntity<List<Transportprovider>> getTraprovider(Long service_provider_id);

    ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap);

    ResponseEntity<List<Transportprovider>> gettransport();

    ResponseEntity<Optional<Transportprovider>> getTransporterProfile(String email);

    ResponseEntity<?> addratetotranspoter(String code, Map<String, String> requestMap);
}
