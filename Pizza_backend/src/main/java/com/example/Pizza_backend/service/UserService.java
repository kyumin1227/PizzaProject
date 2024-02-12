package com.example.Pizza_backend.service;

import com.example.Pizza_backend.dto.UserInfoDto;
import com.example.Pizza_backend.entity.User;
import com.example.Pizza_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserInfoDto getUserInfo(String userId) {

        User user = userRepository.findByUserId(userId);

        UserInfoDto userInfo = new UserInfoDto();

        userInfo.setAdmin(user.isAdmin());
        userInfo.setId(user.getUserId());
        userInfo.setEmail(user.getEmail());
        userInfo.setNickName(user.getNickname());
        userInfo.setFirstName(user.getFirstName());
        userInfo.setLastName(user.getLastName());

        return userInfo;

    }
}
