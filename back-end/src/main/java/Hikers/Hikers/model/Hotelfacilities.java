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
@Table(name = "hotelfacilities")
public class Hotelfacilities implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="facility_id")
    private Long facility_id;

    @Column(name="hotel_id")
    private Long hotel_id;

    @Column(name="facility_name")
    private String facility_name;

    @Column(name = "description")
    private String description;

}
