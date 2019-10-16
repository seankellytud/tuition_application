package com.collegeproject.grinds.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}