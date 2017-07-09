package com.zw.cf.service;

import com.zw.cf.model.User;

import java.util.List;

/**
 * Created by zhaowei on 2017/6/24.
 */
public interface UserServiceInterface {
    public String  add(User user);
    public void delete(String id);
    public User getUserByName(String userName);
    public List<User> getUserList();
}
