package com.fluentstream.beercoolerapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Beer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message ="Beer brandname cannot be blank.")
    private String name;
    private String status;
    private Integer likes;
    private Integer dislikes;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getDislikes() { return dislikes; }

    public void setDislikes(Integer dislikes) { this.dislikes = dislikes; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }
}
