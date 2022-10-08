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
@Table(name = "hotelrule")
public class Hotelrule implements Serializable{

    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rule_id")
    private Long rule_id;

    @Column(name = "description")
    private String description;

    @Column(name="hotel_id")
    private Long hotel_id;

}
