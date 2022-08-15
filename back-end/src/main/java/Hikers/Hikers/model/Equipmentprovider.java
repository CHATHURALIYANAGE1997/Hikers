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
@Table(name = "equipmentprovider")
public class Equipmentprovider implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="provider_id")
    private Long provider_id;

    @Column(name="fullname")
    private String fullname;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="contactNumber")
    private String contactNumber;

    @Column(name="address")
    private String address;

    @Column(name="accountstatus")
    private String accountstatus;

    @Column(name="role")
    private String role;
}
