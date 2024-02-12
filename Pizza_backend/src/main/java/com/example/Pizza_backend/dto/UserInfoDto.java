package com.example.Pizza_backend.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class UserInfoDto {

    private String email;
    private String firstName;
    private String id;
    private boolean isAdmin;
    private String lastName;
    private String nickName;

}
