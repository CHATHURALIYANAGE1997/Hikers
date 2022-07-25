package Hikers.Hikers.restImpl;

import Hikers.Hikers.rest.UserRest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/user")
public class UserRestImpl implements UserRest {
    
}
