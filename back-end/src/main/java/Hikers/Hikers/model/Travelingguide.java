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
@Table(name = "travelingguide")
public class Travelingguide implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="guide_id")
    private Long guide_id;

    @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="address")
    private String address;

    @Column(name="dob")
    private String dob;

    @Column(name="accountstatus")
    private String accountstatus;

    @Column(name="prolice_report")
    private String prolice_report;

    @Column(name="gender")
    private String gender;

    @Column(name="experience")
    private String experience;

    @Column(name="nic")
    private String nic;

    @Column(name="nic_image")
    private String nic_image;

    @Column(name="rate")
    private String rate;

    @Column(name="password")
    private String password;

    @Column(name="email")
    private String email;

    @Column(name="role")
    private String role;

    @Column(name="contactNumber")
    private String contactNumber;

    @Column(name = "verification_code", length = 72)
    private String verificationCode;

    @Column(name = "province")
    private String province;

    private boolean enabled;

    private String fileName;

    private String fileType;

    @Lob
    private byte[] data;

    private String security;

    private String securityoverrall;

    private String punctuality;

    private String punctualityoverrall;

    private String communication;

    private String communicationoverrall;

    private String domainknowledge;

    private String domainknowledgeoverrall;

    private String overrall;

    private String count;
}
