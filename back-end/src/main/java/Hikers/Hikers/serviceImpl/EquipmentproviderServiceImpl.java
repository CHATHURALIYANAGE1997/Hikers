package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.model.Equipmentprovider;
import Hikers.Hikers.repository.EquipmentproviderRepo;
import Hikers.Hikers.service.EquipmentproviderService;
import Hikers.Hikers.utils.Hutils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;
import java.util.Objects;

@Slf4j
@Service
public class EquipmentproviderServiceImpl implements EquipmentproviderService {

    @Autowired
    private EquipmentproviderRepo equipmentproviderRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap) {
        try {
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByVerificationCodeAndAccountstatusAndEnabled(id,"ture",true);
            if(id!=null && !Objects.isNull(equipmentprovider) && id.length()==68){
                equipmentprovider.setPassword(passwordEncoder.encode(requestMap.get("password")));
                equipmentprovider.setVerificationCode(null);
                equipmentproviderRepo.save(equipmentprovider);
                return Hutils.getResponseEntity("Password changed", HttpStatus.OK);
            }else {
                return Hutils.getResponseEntity("Unvalid Reqeust", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
