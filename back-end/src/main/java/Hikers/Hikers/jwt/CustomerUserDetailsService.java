package Hikers.Hikers.jwt;

import Hikers.Hikers.model.*;
import Hikers.Hikers.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Objects;


@Slf4j
@Service
public class CustomerUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private HotelRepo hotelRepo;

    @Autowired
    private EquipmentproviderRepo equipmentproviderRepo;

    @Autowired
    private TransportproviderRepo transportproviderRepo;

    @Autowired
    private TravelingguideRepo travelingguideRepo;



    private User userDetails;

    private Hotel hotelDetails;

    private Travelingguide travelingguideDetails;

    private Transportprovider transportproviderDetails;

    private Equipmentprovider equipmentproviderDetails;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Inside loadUserByUsername {}",username);
        userDetails=userRepo.findByEmail(username);
        hotelDetails=hotelRepo.findByEmail(username);
        travelingguideDetails=travelingguideRepo.findByEmail(username);
        transportproviderDetails=transportproviderRepo.findByEmail(username);
        equipmentproviderDetails=equipmentproviderRepo.findByEmail(username);

        if(!Objects.isNull(userDetails)){
            return new org.springframework.security.core.userdetails.User(userDetails.getEmail(),userDetails.getPassword(),new ArrayList<>());
        }else if(!Objects.isNull(hotelDetails)){
            return new org.springframework.security.core.userdetails.User(hotelDetails.getEmail(),hotelDetails.getPassword(),new ArrayList<>());
        }else if(!Objects.isNull(travelingguideDetails)){
            return new org.springframework.security.core.userdetails.User(travelingguideDetails.getEmail(),travelingguideDetails.getPassword(),new ArrayList<>());
        }else if(!Objects.isNull(transportproviderDetails)){
            return new org.springframework.security.core.userdetails.User(transportproviderDetails.getEmail(),transportproviderDetails.getPassword(),new ArrayList<>());
        }else if(!Objects.isNull(equipmentproviderDetails)){
            return new org.springframework.security.core.userdetails.User(equipmentproviderDetails.getEmail(),equipmentproviderDetails.getPassword(),new ArrayList<>());
        }
        else {
            throw new UsernameNotFoundException("User Not Found");
        }
    }

    public User getUserDetails(){
        return userDetails;
    }

    public Hotel getHotelDetails(){
        return hotelDetails;
    }

    public Equipmentprovider getEquipmentproviderDetails(){
        return equipmentproviderDetails;
    }

    public Travelingguide getTravelingguideDetails(){
        return travelingguideDetails;
    }

    public Transportprovider getTransportproviderDetails(){
        return transportproviderDetails;
    }
}

