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

    @Column(name="hotel_id")
    private Long hotel_id;

    @Column(name="room_type")
    private String room_type;

    @Column(name="sleeps")
    private String sleeps;

    @Column(name="amount")
    private Long amount;

    @Column(name="size")
    private Long size;
}
