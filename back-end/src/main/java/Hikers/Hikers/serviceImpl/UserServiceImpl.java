package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.cons.Hcons;
import Hikers.Hikers.jwt.CustomerUserDetailsService;
import Hikers.Hikers.jwt.JwtFilter;
import Hikers.Hikers.jwt.JwtUtil;
import Hikers.Hikers.model.*;
import Hikers.Hikers.repository.*;
import Hikers.Hikers.service.UserService;
import Hikers.Hikers.utils.Hutils;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.RandomString;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.*;


@Slf4j
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private HotelRepo hotelRepo;

    @Autowired
    private TransportproviderRepo transportproviderRepo;

    @Autowired
    private EquipmentproviderRepo equipmentproviderRepo;

    @Autowired
    private TravelingguideRepo travelingguideRepo;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private JwtFilter jwtFilter;


    @Autowired
    private JavaMailSender mailSender;


    @Override
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        try {

            JSONObject jsonObject = new JSONObject();
            Authentication auth= authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestMap.get("email"),requestMap.get("password")));
            if(auth.isAuthenticated()){
                if(!Objects.isNull(customerUserDetailsService.getUserDetails()) && customerUserDetailsService.getUserDetails().getAccountstatus().equalsIgnoreCase("ture")&&(customerUserDetailsService.getUserDetails().getRole().equalsIgnoreCase("User")||customerUserDetailsService.getUserDetails().getRole().equalsIgnoreCase("Admin")||customerUserDetailsService.getUserDetails().getRole().equalsIgnoreCase("Co-Admin"))){
//                   return new ResponseEntity<String>("{\"token\":\""+jwtUtil.generateToken(customerUserDetailsService.getUserDetails().getEmail(),customerUserDetailsService.getUserDetails().getRole())
//                   +"\"},{\"username\":\""+customerUserDetailsService.getUserDetails().getEmail()+"\"}",HttpStatus.OK);
                    jsonObject.put("token", jwtUtil.generateToken(customerUserDetailsService.getUserDetails().getEmail(), customerUserDetailsService.getUserDetails().getRole()));
                    jsonObject.put("name", customerUserDetailsService.getUserDetails().getEmail());
                    jsonObject.put("role", customerUserDetailsService.getUserDetails().getRole());
                    return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
                }else if(!Objects.isNull(customerUserDetailsService.getHotelDetails())&&customerUserDetailsService.getHotelDetails().getAccountstatus().equalsIgnoreCase("ture") && customerUserDetailsService.getHotelDetails().getRole().equalsIgnoreCase("Hotel")){
                    jsonObject.put("token",jwtUtil.generateToken(customerUserDetailsService.getHotelDetails().getEmail(),customerUserDetailsService.getHotelDetails().getRole()));
                    jsonObject.put("name",customerUserDetailsService.getHotelDetails().getEmail());
                    jsonObject.put("role",customerUserDetailsService.getHotelDetails().getRole());
                    return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
                }else if(!Objects.isNull(customerUserDetailsService.getEquipmentproviderDetails()) && customerUserDetailsService.getEquipmentproviderDetails().getAccountstatus().equalsIgnoreCase("ture") && customerUserDetailsService.getEquipmentproviderDetails().getRole().equalsIgnoreCase("Eqprovider")){
                    jsonObject.put("token",jwtUtil.generateToken(customerUserDetailsService.getEquipmentproviderDetails().getEmail(),customerUserDetailsService.getEquipmentproviderDetails().getRole()));
                    jsonObject.put("name",customerUserDetailsService.getEquipmentproviderDetails().getEmail());
                    jsonObject.put("role",customerUserDetailsService.getEquipmentproviderDetails().getRole());
                    return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
                }else if(!Objects.isNull(customerUserDetailsService.getTransportproviderDetails()) && customerUserDetailsService.getTransportproviderDetails().getAccountstatus().equalsIgnoreCase("ture") && customerUserDetailsService.getTransportproviderDetails().getRole().equalsIgnoreCase("Traprovider")){
                    jsonObject.put("token",jwtUtil.generateToken(customerUserDetailsService.getTransportproviderDetails().getEmail(),customerUserDetailsService.getTransportproviderDetails().getRole()));
                    jsonObject.put("name",customerUserDetailsService.getTransportproviderDetails().getEmail());
                    jsonObject.put("role",customerUserDetailsService.getTransportproviderDetails().getRole());
                    return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
                }else if(!Objects.isNull(customerUserDetailsService.getTravelingguideDetails()) && customerUserDetailsService.getTravelingguideDetails().getAccountstatus().equalsIgnoreCase("ture") && customerUserDetailsService.getTravelingguideDetails().getRole().equalsIgnoreCase("Travelguide") ){
                    jsonObject.put("token",jwtUtil.generateToken(customerUserDetailsService.getTravelingguideDetails().getEmail(),customerUserDetailsService.getTravelingguideDetails().getRole()));
                    jsonObject.put("name",customerUserDetailsService.getTravelingguideDetails().getEmail());
                    jsonObject.put("role",customerUserDetailsService.getTravelingguideDetails().getRole());
                    return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
                }
                else {
                    return new ResponseEntity<String>("{\"message\":\""+"Your account is temporarly suspennded,So wait for admin aprove."+"\"}",HttpStatus.BAD_REQUEST);
                }
            }
        }catch (Exception ex){
            log.error("{}",ex);
        }
        return new ResponseEntity<String>("{\"message\":\""+"Bad Credentials."+"\"}",HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap ) {
        //log.info("Inside signup");
        try {
            User user = userRepo.findByEmail(requestMap.get("email"));
            User user1=userRepo.findByContactNumber(requestMap.get("contactNumber"));
            if (Objects.isNull(user)) {
                //user.setPassword(passwordEncoder.encode(user.getPassword()));
                if(Objects.isNull(user1)) {
                    User user2 =userRepo.save(getUserFromMap(requestMap));
                    String siteURL="http://localhost:3000";
                    sendVerificationEmail(user2, siteURL);
                    return Hutils.getResponseEntity("Cheack Your Email", HttpStatus.OK);
                }
                else{
                    return Hutils.getResponseEntity("Phone number is already used", HttpStatus.BAD_REQUEST);
                }
            } else {
                return Hutils.getResponseEntity("Email  is already used", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
            log.error("{}",ex);
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Override
    public ResponseEntity<String> signUpHotel(Map<String, String> requestMap) {
        // log.info("Inside signuphotel{}",requestMap);
        try{
            Hotel hotel=hotelRepo.findByEmail(requestMap.get("email"));
            Hotel hotel1=hotelRepo.findByContactNumber(requestMap.get("contactNumber"));
            if(Objects.isNull(hotel)){
                if(Objects.isNull(hotel1)){
                    hotelRepo.save(getHotelFromMap(requestMap));
                    return Hutils.getResponseEntity("SuccessFully Registrered", HttpStatus.OK);
                }else {
                    return Hutils.getResponseEntity("Phone number is already used", HttpStatus.BAD_REQUEST);
                }
            }else {
                return Hutils.getResponseEntity("Email  is already used", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private void sendVerificationEmail(User user, String siteURL) throws MessagingException, UnsupportedEncodingException {
        // SimpleMailMessage message=new SimpleMailMessage();
        String toAddress = user.getEmail();
        String fromAddress = "oraclefreightsolutionspvt@gmail.com";
        String senderName = "Hikers";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getFirstname());
        String verifyURL = siteURL + "/verify?id=" + user.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);

    }

    @Override
    public ResponseEntity<String> signUpTransportProvider(Map<String, String> requestMap) {
        try{
            // log.info("Inside signuptransportprovider{}",requestMap);
            Transportprovider transportprovider=transportproviderRepo.findByEmail(requestMap.get("email"));
            Transportprovider transportprovider1=transportproviderRepo.findByContactNumber(requestMap.get("contactNumber"));
            if(Objects.isNull(transportprovider)){
                if(Objects.isNull(transportprovider1)){
                    transportproviderRepo.save(getTransportProviderFromMap(requestMap));
                    return Hutils.getResponseEntity("SuccessFully Registrered", HttpStatus.OK);
                }else {
                    return Hutils.getResponseEntity("Phone number is already used", HttpStatus.BAD_REQUEST);
                }

            }else {
                return Hutils.getResponseEntity("Email  is already used", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> signUpEquipmentProvider(Map<String, String> requestMap) {
        try {
            // log.info("Inside signupequipmentprovider{}",requestMap);
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmail(requestMap.get("email"));
            Equipmentprovider equipmentprovider1=equipmentproviderRepo.findByContactNumber(requestMap.get("contactNumber"));
            if(Objects.isNull(equipmentprovider)){
                if(Objects.isNull(equipmentprovider1)){
                    equipmentproviderRepo.save(getEquipmentProviderFromMap(requestMap));
                    return Hutils.getResponseEntity("SuccessFully Registrered", HttpStatus.OK);
                }else {
                    return Hutils.getResponseEntity("Phone number is already used", HttpStatus.BAD_REQUEST);
                }
            }else {
                return Hutils.getResponseEntity("Email  is already used", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> signUpTravelingguide(Map<String, String> requestMap) {
        try{
            // log.info("Inside signuptravelingguide{}",requestMap);
            Travelingguide travelingguide=travelingguideRepo.findByEmail(requestMap.get("email"));
            Travelingguide travelingguide1=travelingguideRepo.findByContactNumber(requestMap.get("contactNumber"));
            if(Objects.isNull(travelingguide)){
                if(Objects.isNull(travelingguide1)){
                    travelingguideRepo.save(getTravelingGuideFromMap(requestMap));
                    return Hutils.getResponseEntity("SuccessFully Registrered", HttpStatus.OK);
                }else {
                    return Hutils.getResponseEntity("Phone number is already used", HttpStatus.BAD_REQUEST);
                }
            }else {
                return Hutils.getResponseEntity("Email  is already used", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> userProfile() {
        try{
            String currentUser=jwtFilter.getCurrentUser();
            String currentUserRole=jwtFilter.getCurrentUserRole();
            System.out.println(currentUser);
            System.out.println("currentUserRole");
            System.out.println(currentUserRole);
            User user=userRepo.findByEmail(currentUser);
            Transportprovider transportprovider=transportproviderRepo.findByEmail(currentUser);
            Hotel hotel=hotelRepo.findByEmail(currentUser);
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmail(currentUser);
            if(!Objects.isNull(user)){
                user.setPassword("null");
                return new ResponseEntity(user,HttpStatus.OK);
            }else if(!Objects.isNull(transportprovider)){
                transportprovider.setPassword("null");
                return new ResponseEntity(transportprovider,HttpStatus.OK);
            }else if(!Objects.isNull(hotel)){
                hotel.setPassword("null");
                return new ResponseEntity(hotel,HttpStatus.OK);
            }else if(!Objects.isNull(equipmentprovider)){
                equipmentprovider.setPassword("null");
                return new ResponseEntity(equipmentprovider,HttpStatus.OK);
            }
            else{
                Travelingguide travelingguide= travelingguideRepo.findByEmail(currentUser);
                travelingguide.setPassword("null");
                return new ResponseEntity(travelingguide,HttpStatus.OK);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            if(jwtFilter.isCoAdmin()||jwtFilter.isAdmin()){
                String role="User";
                return new ResponseEntity<>(userRepo.findByRole(role),HttpStatus.OK);
            }else{
                return new ResponseEntity<>(new ArrayList<>(), HttpStatus.UNAUTHORIZED);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<List<User>>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<User> getUser(Long id) {
        try{
            if(jwtFilter.isAdmin()||jwtFilter.isCoAdmin()){
                Optional<User> user=userRepo.findById(id);
                if(user.isPresent()){
                    return new ResponseEntity(user, HttpStatus.OK);
                }else{
                    return new ResponseEntity(new ArrayList<>(), HttpStatus.UNAUTHORIZED);
                }
            } else{
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<Optional<Transportprovider>> getTraProvide(Long service_provider_id) {
        try{
            Optional<Transportprovider> transportprovider=transportproviderRepo.findById(service_provider_id);
            if(transportprovider.isPresent()){
                return new ResponseEntity(transportprovider, HttpStatus.OK);
            }else{
                return new ResponseEntity(new ArrayList<>(),HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> verifyUser(String code) {
        try {
            User user=userRepo.findByVerificationCode(code);
            if(user==null ||user.isEnabled()){
                return Hutils.getResponseEntity("Not Valid Requst", HttpStatus.BAD_REQUEST);
            }else{
                user.setVerificationCode(null);
                user.setEnabled(true);
                user.setAccountstatus("ture");
                userRepo.save(user);
                return Hutils.getResponseEntity("Account Verifed", HttpStatus.OK);

            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }


    private User getUserFromMap(Map<String,String> requestMap){
        User user=new User();
        user.setFirstname(requestMap.get("firstname"));
        user.setLastname(requestMap.get("lastname"));
        user.setContactNumber(requestMap.get("contactNumber"));
        user.setEmail(requestMap.get("email"));
        user.setPassword(passwordEncoder.encode(requestMap.get("password")));
        user.setAccountstatus(requestMap.get("accountstatus"));
        user.setGender(requestMap.get("gender"));
        user.setAge(requestMap.get("age"));
        user.setNic(requestMap.get("nic"));
        user.setImage(requestMap.get("image"));
        String randomCode = RandomString.make(64);
        user.setVerificationCode(randomCode);
        user.setEnabled(false);
        user.setRole("ture");
        return user;

    }

    private Hotel getHotelFromMap(Map<String,String> requestMap){
        Hotel hotel=new Hotel();
        hotel.setName(requestMap.get("name"));
        hotel.setEmail(requestMap.get("email"));
        hotel.setPassword(passwordEncoder.encode(requestMap.get("password")));
        hotel.setAccountstatus(requestMap.get("accountstatus"));
        hotel.setContactNumber(requestMap.get("contactNumber"));
        hotel.setNo_of_rooms(requestMap.get("no_of_rooms"));
        hotel.setRate(requestMap.get("rate"));
        hotel.setAddress(requestMap.get("address"));
        hotel.setRole(requestMap.get("role"));
        return hotel;
    }

    private Transportprovider getTransportProviderFromMap(Map<String,String> requestMap){
        Transportprovider transportprovider=new Transportprovider();
        transportprovider.setFirstname(requestMap.get("firstname"));
        transportprovider.setLastname(requestMap.get("lastname"));
        transportprovider.setEmail(requestMap.get("email"));
        transportprovider.setPassword(passwordEncoder.encode(requestMap.get("password")));
        transportprovider.setAccountstatus(requestMap.get("accountstatus"));
        transportprovider.setAddress(requestMap.get("address"));
        transportprovider.setVehicle_type(requestMap.get("vehicle_type"));
        transportprovider.setNic(requestMap.get("nic"));
        transportprovider.setMaximum_passengers(requestMap.get("maximum_passengers"));
        transportprovider.setVehicle_number(requestMap.get("vehicle_number"));
        transportprovider.setImage(requestMap.get("image"));
        transportprovider.setRate(requestMap.get("rate"));
        transportprovider.setContactNumber(requestMap.get("contactNumber"));
        transportprovider.setRole(requestMap.get("role"));
        return transportprovider;
    }

    private Equipmentprovider getEquipmentProviderFromMap(Map<String,String> requestMap) {
        Equipmentprovider equipmentprovider=new Equipmentprovider();
        equipmentprovider.setFullname(requestMap.get("fullname"));
        equipmentprovider.setEmail(requestMap.get("email"));
        equipmentprovider.setPassword(passwordEncoder.encode(requestMap.get("password")));
        equipmentprovider.setContactNumber(requestMap.get("contactNumber"));
        equipmentprovider.setAddress(requestMap.get("address"));
        equipmentprovider.setAccountstatus(requestMap.get("accountstatus"));
        equipmentprovider.setRole(requestMap.get("role"));
        return equipmentprovider;
    }

    private Travelingguide getTravelingGuideFromMap(Map<String,String> requestMap){
        Travelingguide travelingguide=new Travelingguide();
        travelingguide.setFirstname(requestMap.get("firstname"));
        travelingguide.setLastname(requestMap.get("lastname"));
        travelingguide.setAddress(requestMap.get("address"));
        travelingguide.setDob(requestMap.get("dob"));
        travelingguide.setEducation_level(requestMap.get("education_level"));
        travelingguide.setProlice_report(requestMap.get("prolice_report"));
        travelingguide.setGender(requestMap.get("gender"));
        travelingguide.setExperience(requestMap.get("experience"));
        travelingguide.setNic(requestMap.get("nic"));
        travelingguide.setNic_image(requestMap.get("nic_image"));
        travelingguide.setRate(requestMap.get("rate"));
        travelingguide.setPassword(passwordEncoder.encode(requestMap.get("password")));
        travelingguide.setEmail(requestMap.get("email"));
        travelingguide.setRole(requestMap.get("role"));
        travelingguide.setContactNumber(requestMap.get("contactNumber"));
        travelingguide.setAccountstatus(requestMap.get("accountstatus"));
        return travelingguide;
    }



}
