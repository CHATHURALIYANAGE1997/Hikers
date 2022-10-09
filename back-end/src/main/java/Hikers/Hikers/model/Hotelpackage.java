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
@Table(name="hotelpackage")
public class Hotelpackage implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long package_id;

    @Column(name = "hotel_id")
    private Long hotel_id;

    @Column(name ="package_type")
    private String package_type;

    @Column(name = "no_signle_bed")
    private Integer no_single_bed;

    @Column(name = "no_double_bed")
    private Integer no_double_bed;

    @Column(name = "sleeps")
    private Integer sleeps;

    @Column(name = "facility")
    private String facility;

    @Column(name = "food")
    private String food;

    @Column(name = "amount")
    private Float amount;

}
