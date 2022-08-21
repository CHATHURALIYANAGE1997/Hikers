package Hikers.Hikers.service;


import Hikers.Hikers.model.Transportprovider;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface TraProviderService {
    ResponseEntity<List<Transportprovider>> getTraproviders();

    ResponseEntity<List<Transportprovider>> getTraprovider(Long service_provider_id);

}
