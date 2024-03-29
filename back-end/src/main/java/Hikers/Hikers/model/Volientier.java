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
@Table(name = "volientier")
public class Volientier implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String name;

    private String email;

    private  String  contactnumber;

}
