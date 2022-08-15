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
@Table(name = "transportprovider")
public class Transportprovider implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="service_provider_id")
    private Long service_provider_id;

    @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="email")
    private String  email;

    @Column(name="password")
    private String password;

    @Column(name="accountstatus")
    private String accountstatus;

    @Column(name="address")
    private String address;

    @Column(name="vehicle_type")
    private String  vehicle_type;

    @Column(name="nic")
    private String  nic;

    @Column(name="maximum_passengers")
    private String  maximum_passengers;

    @Column(name="vehicle_number")
    private String  vehicle_number;

    @Column(name="image")
    private String  image;

    @Column(name="rate")
    private String  rate;

    @Column(name="contactNumber")
    private String contactNumber;

    @Column(name="role")
    private String role;


}

