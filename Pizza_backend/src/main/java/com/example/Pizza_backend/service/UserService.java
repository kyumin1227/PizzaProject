package com.example.Pizza_backend.service;

import com.example.Pizza_backend.dto.UserInfoDto;
import com.example.Pizza_backend.entity.User;
import com.example.Pizza_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public UserInfoDto amendUserInfo(String userId, UserInfoDto userInfo) {

        User user = userRepository.findByUserId(userId);

        if (userInfo.getId() != null) {
            Optional<User> findUserId = Optional.ofNullable(userRepository.findByUserId(userInfo.getId()));
            if (findUserId.isEmpty()) user.setUserId(userInfo.getId());
        }
        if (userInfo.getEmail() != null) user.setEmail(userInfo.getEmail());
        if (userInfo.getFirstName() != null) user.setFirstName(userInfo.getFirstName());
        if (userInfo.getLastName() != null) user.setLastName(userInfo.getLastName());
        if (userInfo.getNickName() != null) user.setNickname(userInfo.getNickName());
        if (userInfo.getIntroduction() != null) user.setIntroduction(userInfo.getIntroduction());

        User saved = userRepository.save(user);

        UserInfoDto returnUserInfo = saved.convertUserInfo();

        return returnUserInfo;

    }
}
