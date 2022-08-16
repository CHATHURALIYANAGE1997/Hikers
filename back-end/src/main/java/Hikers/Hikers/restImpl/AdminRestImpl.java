package Hikers.Hikers.restImpl;

import org.springframework.web.bind.annotation.RestController;

@RestController("/admin")
public class AdminRestImpl implements AdminRest {
  @Autowired
    private UserService userService;

    @Autowired
    private HotelService hotelService;

    @Autowired
    private TravelGuideService travelGuideService;

    @Autowired
    private TraProviderService traProviderService;

    @Autowired
    private JwtFilter jwtFilter;

    @Override
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            return userService.getAllUsers();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<List<User>>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
