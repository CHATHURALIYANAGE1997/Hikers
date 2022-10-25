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
@Table(name= "room")
public class Hotelroom implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long room_id;


    private Long hotelid;

    @Column(name="room_type")
    private String roomtype;

    @Column(name="sleeps")
    private String sleeps;

    @Column(name="amount")
    private String amount;

    @Column(name="size_length")
    private Long size_length;

    @Column(name="size_width")
    private Long size_width;

    @Column(name="facility")
    private String facility;

    @Column(name="food")
    private String food;
}
