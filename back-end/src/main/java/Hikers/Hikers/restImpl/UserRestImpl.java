package Hikers.Hikers.restImpl;

import Hikers.Hikers.rest.UserRest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import Hikers.Hikers.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/user")
public class UserRestImpl implements UserRest {
   @Autowired
    private UserService userService;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        try {

            return userService.signUp(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return Hutils.getResponseEntity(Hcons.SOMETHIMG_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
