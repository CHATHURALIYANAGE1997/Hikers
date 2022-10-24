package Hikers.Hikers.model;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Data
@Entity
@DynamicUpdate
@DynamicInsert
@Table (name = "trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "adults")
    private String adults;

    @Column(name = "children")
    private String children;

    @Column(name = "date")
    private String date;

    @Column(name = "mountain")
    private String mountain;

    @Column(name = "packages")
    private String packages;

    @Column(name = "province")
    private String province;

}