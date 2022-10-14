package Hikers.Hikers.model;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Time;
import java.util.Date;

@Data
@Entity
@DynamicUpdate
@DynamicInsert
@Table(name = "hotel_booking")
public class Hotelbooking implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "hotel_id")
    private Long hotel_id;

    @Column(name="user_id")
    private Long user_id;

    @Column(name="package_name")
    private String package_name;

    @Column(name="package_id")
    private Long package_id;

    @Column(name="firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name="date")
    private Date date;

    @Column(name="time")
    private Time time;

    @Column(name="crowd")
    private Integer crowd;

    @Column(name="payment")
    private Float payment;

}
