package com.example.Pizza_backend.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class UserLoginDto {

    private String id;
    private String password;
}
