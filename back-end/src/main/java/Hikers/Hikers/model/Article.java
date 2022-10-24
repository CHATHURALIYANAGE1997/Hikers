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
@Table(name = "article")
public class Article {

    private  static  final long serialVersionUID=1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String mountname;

    private String province;

    private String description;

    private Date date;

    private String isabseiling;

}
