package com.example.Pizza_backend.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class UserCreateDto {

    private String id;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String nickname;
    private String introduction;
}
