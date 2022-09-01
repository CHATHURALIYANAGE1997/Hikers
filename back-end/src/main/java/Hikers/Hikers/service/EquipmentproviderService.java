package Hikers.Hikers.service;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface EquipmentproviderService {
    ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap);
}
