package Hikers.Hikers.model;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@DynamicUpdate
@DynamicInsert
@Table(name = "hotel")
public class Hotel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long hotel_id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="accountstatus")
    private String accountstatus;

    @Column(name="contactNumber")
    private String contactNumber;

    @Column(name="no_of_rooms")
    private String no_of_rooms;

    @Column(name="rate")
    private String rate;

    @Column(name="address")
    private String address;

    @Column(name="role")
    private String role;

    @Column(name="province")
    private String province;

    @Column(name="img1")
    private String img1;

    @Column(name="img2")
    private String img2;
    
     @Column(name = "verification_code", length = 76)
    private String verificationCode;

}

