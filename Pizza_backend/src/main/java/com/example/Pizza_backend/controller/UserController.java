package com.example.Pizza_backend.controller;

import com.example.Pizza_backend.dto.UserDto;
import com.example.Pizza_backend.entity.User;
import com.example.Pizza_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @PostMapping("/api/user/create")
    public ResponseEntity<User> createUser(@RequestBody UserDto userDto) {
        System.out.println(userDto.toString());
        User user = new User();
        user.setUserId(userDto.getId());
        user.setPassword(userDto.getPassword());
        user.setEmail(userDto.getEmail());
        user.setNickname(userDto.getNickname());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setIntroduction(userDto.getIntroduction());

        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
}
