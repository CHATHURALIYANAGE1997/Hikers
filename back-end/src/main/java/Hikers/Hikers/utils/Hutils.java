package Hikers.Hikers.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Hutils {

    private Hutils() {
    }

    public static ResponseEntity<String> getResponseEntity(){
        return  new ResponseEntity<String>("message", HttpStatus.ACCEPTED);
    }

}
