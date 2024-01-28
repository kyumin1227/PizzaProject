package com.example.Pizza_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class User {

    @Id @GeneratedValue
    private Long id;

    private String userId;
    private String password;
    private String firstName;
    private String lastName;
    private String nickname;
    private String email;
    private String introduction;
    private boolean admin;

}
