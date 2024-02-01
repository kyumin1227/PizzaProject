package com.example.Pizza_backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = "userId")
})
public class User {

    @Id @GeneratedValue
    private Long id;

    private String userId;  // unique
    private String password;
    private String firstName;
    private String lastName;
    private String nickname;
    private String email;
    private String introduction;
    private boolean admin;

}
