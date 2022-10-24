package Hikers.Hikers.serviceImpl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
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
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.*;


@Slf4j
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ReplayRepo replayRepo;

    @Autowired
    private QuestionRepo questionRepo;

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

    @Autowired
    private VolientierRepo volientierRepo;

    @Autowired VolientierprogramsRepo volientierprogramsRepo;

    @Override
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        
        try {

            JSONObject jsonObject = new JSONObject();
            
            Authentication auth= authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestMap.get("email"),requestMap.get("password")));
            if(auth.isAuthenticated()){
                if(!Objects.isNull(customerUserDetailsService.getUserDetails()) && customerUserDetailsService.getUserDetails().getAccountstatus().equalsIgnoreCase("ture")&&(customerUserDetailsService.getUserDetails().getRole().equalsIgnoreCase("User")||customerUserDetailsService.getUserDetails().getRole().equalsIgnoreCase("Admin")||customerUserDetailsService.getUserDetails().getRole().equalsIgnoreCase("Co-Admin"))){
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
                    return new ResponseEntity<String>("{\"message\":\""+"Your account is temporary suspended, Waiting for admin's approval."+"\"}",HttpStatus.BAD_REQUEST);
                }
            }
        }catch (Exception ex){
            log.error("llll{}",ex);
        }
        return new ResponseEntity<String>("{\"message\":\""+"Bad Credentials."+"\"}",HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap ) {
        try {
            User user = userRepo.findByEmail(requestMap.get("email"));
            User user1=userRepo.findByContactNumber(requestMap.get("contactNumber"));
            int stringSize= requestMap.get("password").trim().length();
            if (Objects.isNull(user)  && requestMap.get("email")!=null && stringSize>4) {
                if(Objects.isNull(user1)) {
                    User user2 =userRepo.save(getUserFromMap(requestMap));
                    String siteURL="http://localhost:3000";
                    sendVerificationEmail(user2, siteURL);
                    return Hutils.getResponseEntity("Check Your Email", HttpStatus.OK);
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
        try{
            Hotel hotel=hotelRepo.findByEmail(requestMap.get("email"));
            Hotel hotel1=hotelRepo.findByContactNumber(requestMap.get("contactNumber"));
            if(Objects.isNull(hotel)){
                if(Objects.isNull(hotel1)){
                    hotelRepo.save(getHotelFromMap(requestMap));
                    return Hutils.getResponseEntity("SuccessFully Registered", HttpStatus.OK);
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
    public ResponseEntity<String> signUpTransportProvider(Map<String, String> requestMap) {
        try{
            Transportprovider transportprovider=transportproviderRepo.findByEmail(requestMap.get("email"));
            Transportprovider transportprovider1=transportproviderRepo.findByContactNumber(requestMap.get("contactNumber"));
            if(Objects.isNull(transportprovider)){
                if(Objects.isNull(transportprovider1)){
                    transportproviderRepo.save(getTransportProviderFromMap(requestMap));
                    return Hutils.getResponseEntity("Successfully Registered", HttpStatus.OK);
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
             log.info("Inside 1");
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmail(requestMap.get("email"));
            Equipmentprovider equipmentprovider1=equipmentproviderRepo.findByContactNumber(requestMap.get("contactNumber"));
            log.info(requestMap.get("password"));
            log.info(requestMap.get("email"));
            int stringSize= requestMap.get("password").trim().length();
            if(Objects.isNull(equipmentprovider)&& requestMap.get("email")!=null && stringSize>4 ){
                if(Objects.isNull(equipmentprovider1) ){
                    Equipmentprovider equipmentprovider2= equipmentproviderRepo.save(getEquipmentProviderFromMap(requestMap));
                    String siteURL="http://localhost:3000";
                    sendVerificationEmailToEquProvider(equipmentprovider2, siteURL);
                    log.info("Inside 2");
                    return Hutils.getResponseEntity("SuccessFully Registered,You will recive a email", HttpStatus.OK);
                }else {
                    log.info("Inside 3");
                    return Hutils.getResponseEntity("Phone number is already used", HttpStatus.BAD_REQUEST);
                }
            }else {
                log.info("Inside 4");
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
            Travelingguide travelingguide=travelingguideRepo.findByEmail(requestMap.get("email"));
            Travelingguide travelingguide1=travelingguideRepo.findByContactNumber(requestMap.get("contactNumber"));
            int stringSize= requestMap.get("password").trim().length();
            if(Objects.isNull(travelingguide) && requestMap.get("email")!=null && stringSize>4){
                if(Objects.isNull(travelingguide1)){
                   Travelingguide travelingguide2= travelingguideRepo.save(getTravelingGuideFromMap(requestMap));
                    String siteURL="http://localhost:3000";
                    sendVerificationEmailToTravelguide(travelingguide2,siteURL);
                    return Hutils.getResponseEntity("SuccessFully Registered cheak your email", HttpStatus.OK);
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
            log.info(code);
            User user=userRepo.findByVerificationCode(code);
            log.info("q");
            if(user == null || user.isEnabled()){
                log.info("2");
                return Hutils.getResponseEntity("Not Valid Requst", HttpStatus.BAD_REQUEST);
            }else{
                user.setVerificationCode(null);
                user.setEnabled(true);
                user.setAccountstatus("ture");
                userRepo.save(user);
                log.info("3");
                return Hutils.getResponseEntity("Account Verifed", HttpStatus.OK);

            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> verifyGuide(String code) {
       try {
           Travelingguide travelingguide=travelingguideRepo.findByVerificationCode(code);
           if( travelingguide==null || travelingguide.isEnabled()){
               log.info("gui");
               return Hutils.getResponseEntity("Not Valid Requst", HttpStatus.BAD_REQUEST);
           }else {
               travelingguide.setVerificationCode(null);
               travelingguide.setEnabled(true);
               travelingguide.setAccountstatus("false");
               travelingguideRepo.save(travelingguide);
               log.info("guide");
               return Hutils.getResponseEntity("Account Verifed waite for admin approve", HttpStatus.OK);
           }
       }catch (Exception ex){
           ex.printStackTrace();
       }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

   @Override
   public ResponseEntity<?> verifyGuideByAdmin(String code) {
        try {
            Travelingguide travelingguide=travelingguideRepo.findByEmail(code);
            travelingguide.setAccountstatus("ture");
            travelingguideRepo.save(travelingguide);
            return Hutils.getResponseEntity("Account status update successfully", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> suggetionguide() {
        try{
            List<Travelingguide> travelingguides=travelingguideRepo.findAll();
            if(travelingguides.size()==0){

               return Hutils.getResponseEntity("No guide records", HttpStatus.BAD_REQUEST);
            }
            if(travelingguides.size()==1){
                return new ResponseEntity(travelingguides.get(0),HttpStatus.OK);
            }
            else {
                Collections.sort(travelingguides, new Comparator<Travelingguide>() {
                    @Override
                    public int compare(Travelingguide o1, Travelingguide o2) {
                        if((o1.getOverrall() != null) && (o2.getOverrall() != null)) {
                            return o1.getOverrall().compareTo(o2.getOverrall());
                        }
                        return 0;
                    }
                });
                System.out.println(travelingguides);
                return new ResponseEntity(travelingguides, HttpStatus.OK);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> suggetiontransport() {
        try {
            List<Transportprovider> transportproviders=transportproviderRepo.findAll();
            if(transportproviders.size()==0){

                return Hutils.getResponseEntity("No guide records", HttpStatus.BAD_REQUEST);
            }
            if(transportproviders.size()==1){
                return new ResponseEntity(transportproviders.get(0),HttpStatus.OK);
            }
            else {
                Collections.sort(transportproviders, new Comparator<Transportprovider>() {
                    @Override
                    public int compare(Transportprovider o1, Transportprovider o2) {
                        if((o1.getOverrall() != null) && (o2.getOverrall() != null)) {
                            return o1.getOverrall().compareTo(o2.getOverrall());
                        }
                        return 0;
                    }
                });
                System.out.println(transportproviders);
                return new ResponseEntity(transportproviders, HttpStatus.OK);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> askque(Map<String, String> requestMap) {
        try {
            Question question=new Question();
            question.setEmail(jwtFilter.getCurrentUser());
            question.setName(requestMap.get("name"));
            question.setAddress(requestMap.get("address"));
            question.setStatus("false");
            questionRepo.save(question);
            return Hutils.getResponseEntity("Question Add suceesfully", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> replay(Long code,Map<String, String> requestMap) {
        try{
           Replay replay=new Replay();
           replay.setEmail(jwtFilter.getCurrentUser());
           replay.setQid(code);
           replay.setReplay(requestMap.get("replay"));
           replayRepo.save(replay);
           Optional<Question> question=questionRepo.findById(code);
            String messge="You have a new replay to your question";
          // sendReplay(question,messge);
            return Hutils.getResponseEntity("Suceesfully add replay", HttpStatus.OK);

        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> volientier(Map<String, String> requestMap) {
        try {
           Volientier volientier=new Volientier();
           volientier.setName(requestMap.get("name"));
           volientier.setEmail(requestMap.get("email"));
           volientier.setContactnumber(requestMap.get("contactnumber"));
           volientierRepo.save(volientier);
            return Hutils.getResponseEntity("Successfully add volientier", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> getvolientiers() {
        try {
            List<Volientier> volientiers=volientierRepo.findAll();
            return new ResponseEntity(volientiers,HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> volientierprograms(Map<String, String> requestMap) {
        try {
            VolientierPrograms volientierPrograms=new VolientierPrograms();
            volientierPrograms.setTime(requestMap.get("time"));
            volientierPrograms.setDate(requestMap.get("date"));
            volientierPrograms.setPlace(requestMap.get("place"));
            volientierprogramsRepo.save(volientierPrograms);

            String str1 = "We have organice a volientier program. We are wellcome you.place :";
            str1 = str1.concat(requestMap.get("place"));
            str1 = str1.concat(".");
            str1 = str1.concat("time :");
            str1 = str1.concat(requestMap.get("time"));
            str1 = str1.concat(".");
            str1 = str1.concat("date :");
            str1 = str1.concat(requestMap.get("date"));
            str1 = str1.concat(".");

            List<Volientier> volientiers=volientierRepo.findAll();
            int size=volientiers.size();
            for(int i=0;i<size;i++){
               String email=volientiers.get(i).getEmail();
                sendEmailToVolientiers(email,str1);
            }

        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private void sendEmailToVolientiers(String email,String messge) throws MessagingException, UnsupportedEncodingException {
        String toAddress = email;
        MimeMessage msg = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
        helper.setTo(toAddress);
        helper.setSubject("Hikers volientier program");
        helper.setText(messge, true);
        mailSender.send(msg);
    }


//    private void sendReplay(Optional<Question> question, String messge)  throws MessagingException, UnsupportedEncodingException {
//        if(question.isEmpty()){
//        String toAddress = question.getEmail();}
//        MimeMessage msg = mailSender.createMimeMessage();
//        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
//        helper.setTo(toAddress);
//        helper.setSubject("Hikers");
//        helper.setText(messge, true);
//        mailSender.send(msg);
//    }

    @Override
    public ResponseEntity<?> RejectGuideByAdmin(String code) {
        try {
            Travelingguide travelingguide=travelingguideRepo.findByEmail(code);
            travelingguideRepo.delete(travelingguide);
            String messge="Your request to join Hikers as a guide was rejected unfortunately";
            sendVerificationEmailToTravelguide2(travelingguide,messge);
            return Hutils.getResponseEntity("Account reject successfully", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private void sendVerificationEmailToTravelguide2(Travelingguide travelingguide ,String messge) throws MessagingException, UnsupportedEncodingException {
        String toAddress = travelingguide.getEmail();
        MimeMessage msg = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
        helper.setTo(toAddress);
        helper.setSubject("Hikers");
        helper.setText(messge, true);
        mailSender.send(msg);
    }


    @Override
    public ResponseEntity<?> verifyEquprovider(String code) {
       try {
           Equipmentprovider equipmentprovider=equipmentproviderRepo.findByVerificationCode(code);
           if(equipmentprovider==null||equipmentprovider.isEnabled()){
               return Hutils.getResponseEntity("Not Valid Requst", HttpStatus.BAD_REQUEST);
           }
           else {
               equipmentprovider.setVerificationCode(null);
               equipmentprovider.setEnabled(true);
               equipmentprovider.setAccountstatus("false");
               equipmentproviderRepo.save(equipmentprovider);
               log.info("equ");
               return Hutils.getResponseEntity("Account Verifed waite for admin approve", HttpStatus.OK);
           }
       }catch (Exception ex){
           ex.printStackTrace();
       }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @Override
    public ResponseEntity<?> verifyEquproviderByAdmin(String code) {
        try {
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmail(code);
            System.out.println(equipmentprovider);
            equipmentprovider.setAccountstatus("ture");
            equipmentproviderRepo.save(equipmentprovider);
            String messge="Your account create successfully";
            sendVerificationEmailToEquProvider2(equipmentprovider,messge);
            return Hutils.getResponseEntity("Account sttatus update successfully", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public ResponseEntity<?> RejectEquproviderByAdmin(String code) {
        try {
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmail(code);
            equipmentproviderRepo.delete(equipmentprovider);
            String messge="Your request to join Hikers as a equipmentprovider was rejected unfortunately";
            sendVerificationEmailToEquProvider2(equipmentprovider ,messge);
            return Hutils.getResponseEntity("Account sttatus update successfully", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private void sendVerificationEmailToEquProvider2(Equipmentprovider equipmentprovider,String messge)  throws MessagingException, UnsupportedEncodingException {
        String toAddress = equipmentprovider.getEmail();
        MimeMessage msg = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
        helper.setTo(toAddress);
        helper.setSubject("Hikers");
        helper.setText(messge, true);
        mailSender.send(msg);
    }


    @Override
    public ResponseEntity<?> forgotpassword(Map<String, String> requestMap) {
        try {
            String siteURL="http://localhost:3000";
            User user=userRepo.findByEmailAndAccountstatusAndEnabled(requestMap.get("email"),"ture",true);
            Hotel hotel=hotelRepo.findByEmailAndAccountstatus(requestMap.get("email"),"ture");
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmailAndAccountstatusAndEnabled(requestMap.get("email"),"ture",true);
            Transportprovider transportprovider=transportproviderRepo.findByEmailAndAccountstatus(requestMap.get("email"),"ture");
            Travelingguide travelingguide=travelingguideRepo.findByEmailAndAccountstatusAndEnabled(requestMap.get("email"),"ture",true);
            if(!Objects.isNull(user) ) {
                String randomCode = RandomString.make(64);
                user.setVerificationCode(randomCode);
                User user1= userRepo.save(user);
                sendVerificationEmail(user1, siteURL);
                return Hutils.getResponseEntity("Cheack your email",HttpStatus.OK);
            }
            else if(!Objects.isNull(hotel)){
                String randomCode = RandomString.make(76);
                hotel.setVerificationCode(randomCode);
                Hotel hotel1=hotelRepo.save(hotel);
                sendVerificationEmailtoHotel(hotel1,siteURL);
                return Hutils.getResponseEntity("Cheack your email",HttpStatus.OK);
            }
            else if(!Objects.isNull(equipmentprovider)){
                String randomCode = RandomString.make(68);
                equipmentprovider.setVerificationCode(randomCode);
                Equipmentprovider equipmentprovider1=equipmentproviderRepo.save(equipmentprovider);
                sendVerificationEmailToEquProvider(equipmentprovider1,siteURL);
                return Hutils.getResponseEntity("Cheack your email",HttpStatus.OK);
            }
            else if(!Objects.isNull(transportprovider)){
                String randomCode = RandomString.make(80);
                transportprovider.setVerificationCode(randomCode);
                Transportprovider transportprovider1=transportproviderRepo.save(transportprovider);
                sendVerificationEmailToTraProvider(transportprovider1,siteURL);
                return Hutils.getResponseEntity("Cheack your email",HttpStatus.OK);
            }
            else if(!Objects.isNull(travelingguide)){
                String randomCode = RandomString.make(72);
                travelingguide.setVerificationCode(randomCode);
                Travelingguide travelingguide1=travelingguideRepo.save(travelingguide);
                sendVerificationEmailToTravelguide(travelingguide1,siteURL);
                return Hutils.getResponseEntity("Cheack your email",HttpStatus.OK);
            }else {
                return Hutils.getResponseEntity("Not a valid email",HttpStatus.OK);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> changePassoword(String id, Map<String, String> requestMap) {
        try {
            User user=userRepo.findByVerificationCodeAndAccountstatusAndEnabled(id,"ture",true);
            if(id!=null && !Objects.isNull(user) && id.length()==64){
                user.setPassword(passwordEncoder.encode(requestMap.get("password")));
                user.setVerificationCode(null);
                userRepo.save(user);
                return Hutils.getResponseEntity("Password changed", HttpStatus.OK);
            }
            else{
                return Hutils.getResponseEntity("Unvalid Reqeust", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> getUser() {
        try {
            String email=jwtFilter.getCurrentUser();
            User user=userRepo.findByEmail(email);
            if(!Objects.isNull(user)){
                user.setPassword(null);
                return new ResponseEntity(user, HttpStatus.OK);
            }
            Transportprovider transportprovider=transportproviderRepo.findByEmail(email);
            if(!Objects.isNull(transportprovider)){
                user.setPassword(null);
                return new ResponseEntity(transportprovider, HttpStatus.OK);
            }
            Hotel hotel=hotelRepo.findByEmail(email);
            if(!Objects.isNull(hotel)){
                user.setPassword(null);
                return new ResponseEntity(hotel, HttpStatus.OK);
            }
            Travelingguide travelingguide=travelingguideRepo.findByEmail(email);
            if(!Objects.isNull(travelingguide)){
                user.setPassword(null);
                return new ResponseEntity(travelingguide, HttpStatus.OK);
            }
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmail(email);
            if(!Objects.isNull(equipmentprovider)){
                user.setPassword(null);
                return new ResponseEntity(equipmentprovider, HttpStatus.OK);
            }
            return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> uploadprofile(MultipartFile file) {
        try {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            if (fileName.contains("..")) {
                return new ResponseEntity(new ArrayList<>(), HttpStatus.BAD_REQUEST);
            }

            String email=(jwtFilter.getCurrentUser());
            User user=userRepo.findByEmail(email);
            if(!Objects.isNull(user)){
                user.setFileName(fileName);
                user.setFileType(file.getContentType());
                user.setData(file.getBytes());
                userRepo.save(user);
                return Hutils.getResponseEntity("Profile image update sucessfully", HttpStatus.OK);
            }
            Equipmentprovider equipmentprovider=equipmentproviderRepo.findByEmail(email);
            if(!Objects.isNull(equipmentprovider)){
                equipmentprovider.setFileName(fileName);
                equipmentprovider.setFileType(file.getContentType());
                equipmentprovider.setData(file.getBytes());
                equipmentproviderRepo.save(equipmentprovider);
                return Hutils.getResponseEntity("Profile image update sucessfully", HttpStatus.OK);
            }
            Transportprovider transportprovider=transportproviderRepo.findByEmail(email);
            if(!Objects.isNull(transportprovider)){
                transportprovider.setFileName(fileName);
                transportprovider.setFileType(file.getContentType());
                transportprovider.setData(file.getBytes());
                transportproviderRepo.save(transportprovider);
                return Hutils.getResponseEntity("Profile image update sucessfully", HttpStatus.OK);
            }
            Travelingguide travelingguide=travelingguideRepo.findByEmail(email);
            if(!Objects.isNull(travelingguide)){
                travelingguide.setFileName(fileName);
                travelingguide.setFileType(file.getContentType());
                travelingguide.setData(file.getBytes());
                travelingguideRepo.save(travelingguide);
                return Hutils.getResponseEntity("Profile image update sucessfully", HttpStatus.OK);
            }

            return Hutils.getResponseEntity("Something went wrong, please try again", HttpStatus.BAD_REQUEST);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }


    private void sendVerificationEmail(User user, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String toAddress = user.getEmail();
        String fromAddress = "Hikers023@gmail.com";
        String senderName = "Hikers";
        String subject = "Please verify your request";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your request:<br>"
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


    private void sendVerificationEmailToEquProvider(Equipmentprovider equipmentprovider, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String toAddress =equipmentprovider.getEmail();
        String fromAddress = "Hikers023@gmail.com";
        String senderName = "Hikers";
        String subject = "Please verify your requst";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your requst:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", equipmentprovider.getFirstname());
        String verifyURL = siteURL + "/verify?id=" + equipmentprovider.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);

    }

    private void sendVerificationEmailtoHotel(Hotel hotel1, String siteURL) throws MessagingException, UnsupportedEncodingException{
        String toAddress =hotel1.getEmail();
        String fromAddress = "Hikers023@gmail.com";
        String senderName = "Hikers";
        String subject = "Please verify your requst";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your requst:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", hotel1.getName());
        String verifyURL = siteURL + "/verify?id=" + hotel1.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);
    }


    private void sendVerificationEmailToTravelguide(Travelingguide travelingguide, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String toAddress =travelingguide.getEmail();
        String fromAddress = "Hikers023@gmail.com";
        String senderName = "Hikers";
        String subject = "Please verify your requst";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your requst:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", travelingguide.getFirstname());
        String verifyURL = siteURL + "/verify?id=" + travelingguide.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);

    }

    private void sendVerificationEmailToTraProvider(Transportprovider transportprovider, String siteURL) throws MessagingException, UnsupportedEncodingException{
        String toAddress = transportprovider.getEmail();
        String fromAddress = "Hikers023@gmail.com";
        String senderName = "Hikers";
        String subject = "Please verify your request";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your request:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", transportprovider.getFirstname());
        String verifyURL = siteURL + "/verify?id=" + transportprovider.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);

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
        user.setRole(requestMap.get("role"));
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
        hotel.setProvince((requestMap.get("province")));
        hotel.setImg1(requestMap.get("img1"));
        hotel.setImg2(requestMap.get("img2"));
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
        equipmentprovider.setFirstname(requestMap.get("firstname"));
        equipmentprovider.setLastname(requestMap.get("lastname"));
        equipmentprovider.setEmail(requestMap.get("email"));
        equipmentprovider.setPassword(passwordEncoder.encode(requestMap.get("password")));
        equipmentprovider.setContactNumber(requestMap.get("contactNumber"));
        equipmentprovider.setAddress(requestMap.get("address"));
        equipmentprovider.setAccountstatus(requestMap.get("accountstatus"));
        equipmentprovider.setRole(requestMap.get("role"));
        equipmentprovider.setEnabled(false);
        equipmentprovider.setNicimg(requestMap.get("nicimg"));
        equipmentprovider.setProfileimg(requestMap.get("profileimg"));
        String randomCode = RandomString.make(68);
        equipmentprovider.setVerificationCode(randomCode);
        return equipmentprovider;
    }

    private Travelingguide getTravelingGuideFromMap(Map<String,String> requestMap){
        Travelingguide travelingguide=new Travelingguide();
        travelingguide.setFirstname(requestMap.get("firstname"));
        travelingguide.setLastname(requestMap.get("lastname"));
        travelingguide.setAddress(requestMap.get("address"));
        travelingguide.setDob(requestMap.get("dob"));
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
        travelingguide.setProvince(requestMap.get("province"));
        String randomCode = RandomString.make(72);
        travelingguide.setVerificationCode(randomCode);
        return travelingguide;
    }

}
