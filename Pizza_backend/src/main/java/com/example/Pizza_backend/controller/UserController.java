package com.example.Pizza_backend.controller;

import com.example.Pizza_backend.dto.UserCreateDto;
import com.example.Pizza_backend.dto.UserLoginDto;
import com.example.Pizza_backend.entity.User;
import com.example.Pizza_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @PostMapping("/api/user/create")
    public ResponseEntity<String> createUser(@RequestBody UserCreateDto userCreateDto) {
        User user = new User();
        user.setUserId(userCreateDto.getId());
        user.setPassword(userCreateDto.getPassword());
        user.setEmail(userCreateDto.getEmail());
        user.setNickname(userCreateDto.getNickname());
        user.setFirstName(userCreateDto.getFirstName());
        user.setLastName(userCreateDto.getLastName());
        user.setIntroduction(userCreateDto.getIntroduction());

        try {
            userRepository.save(user);
        } catch (DataIntegrityViolationException e) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("이미 존재하는 id 입니다.");
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @PostMapping("/api/login")
    public ResponseEntity<String> loginUser(@RequestBody UserLoginDto userLoginDto) {

        Optional<User> byUserId = Optional.ofNullable(userRepository.findByUserId(userLoginDto.getId()));

        if(!byUserId.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("존재하지 않는 id 입니다.");
        }

        User user = byUserId.get();

        System.out.println(userLoginDto.getPassword());
        System.out.println(user.getPassword());

        if(userLoginDto.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.OK).body(null);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("페스워드가 올바르지 않습니다.");
        }
    }
}
