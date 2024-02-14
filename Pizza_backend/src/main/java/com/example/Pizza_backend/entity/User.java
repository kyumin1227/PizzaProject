package com.example.Pizza_backend.entity;

import com.example.Pizza_backend.dto.UserInfoDto;
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

    /**
     * User객체를 받아서 UserInfoDto 객체로 반환하는 함수
     * @return UserInfoDto
     */
    public UserInfoDto convertUserInfo() {

        UserInfoDto userInfoDto = new UserInfoDto();

        userInfoDto.setId(this.getUserId());
        userInfoDto.setAdmin(this.isAdmin());
        userInfoDto.setEmail(this.getEmail());
        userInfoDto.setFirstName(this.getFirstName());
        userInfoDto.setLastName(this.getLastName());
        userInfoDto.setNickName(this.getNickname());
        userInfoDto.setIntroduction(this.getIntroduction());

        return userInfoDto;
    }

}
