package Hikers.Hikers.serviceImpl;

import Hikers.Hikers.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Slf4j
@Service
public class UserServiceImpl implements UserService {
  @Autowired
    private UserRepo userRepo;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        log.info("Inside signup{}",requestMap);
        try {
            User user = userRepo.findByEmail(requestMap.get("email"));
            if (Objects.isNull(user)) {
                //user.setPassword(passwordEncoder.encode(user.getPassword()));
                userRepo.save(getUserFromMap(requestMap));
                return Hutils.getResponseEntity("SuccessFully Registrered", HttpStatus.OK);
            } else {
                return Hutils.getResponseEntity("Email is already used", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
      private User getUserFromMap(Map<String,String> requestMap){
        User user=new User();
        user.setName(requestMap.get("name"));
        user.setContactNumber(requestMap.get("contactNumber"));
        user.setEmail(requestMap.get("email"));
        user.setPassword(passwordEncoder.encode(requestMap.get("password")));
        //user.setPassword(requestMap.get("password"));
        user.setAccountstatus(requestMap.get("accountstatus"));
        user.setRole(requestMap.get("role"));
        return user;

    }
}
