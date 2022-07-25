package Hikers.Hikers.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Hutils {

    private Hutils() {
    }

    public static ResponseEntity<String> getResponseEntity(String responseMessage, HttpStatus httpStatus){
        return new ResponseEntity<String>("{\"message\":\""+responseMessage+"\"}", httpStatus.INTERNAL_SERVER_ERROR);
    }

}
