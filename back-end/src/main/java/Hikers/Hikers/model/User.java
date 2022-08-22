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
@Table(name = "user")
public class User implements Serializable{

    private  static  final long serialVersionUID=1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="contactNumber")
    private String contactNumber;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="accountstatus")
    private String accountstatus;

    @Column(name="gender")
    private String gender;

    @Column(name="age")
    private String age;

    @Column(name="nic")
    private String nic;

    @Column(name="image")
    private String image;

    @Column(name="role")
    private String role;

    @Column(name = "verification_code", length = 64)
    private String verificationCode;

    private boolean enabled;

}
