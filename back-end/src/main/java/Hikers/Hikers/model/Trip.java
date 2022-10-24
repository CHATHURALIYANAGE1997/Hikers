package Hikers.Hikers.model;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

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

    private String email;

    @Column(name = "adults")
    private String adults;

    @Column(name = "children")
    private String children;

    @Column(name = "date")
    private String date;

    @Column(name = "mountain")
    private String mountain;

    @Column(name = "province")
    private String province;

    private String onedayhike;

    private String camping;

    private String abseiling;

    private String firstprice;

    private String totalprice;

    private String guideid;

    private String guidename;

    private String guideprice;

    private String transpoterid;

    private String transpotername;

    private String transpoterprice;

}
