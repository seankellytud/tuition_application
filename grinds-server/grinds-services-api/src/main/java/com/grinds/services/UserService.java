package com.grinds.services;
import java.util.List;

/**
 * @author cristian
 *Interface for user service, any methods declared must be implemented in the UserServiceImpl
 *
 */

import org.springframework.security.core.userdetails.UserDetails;
import com.grinds.model.api.User;

public interface UserService {
	
	User save(User user);
    List<User> findAll();
    void delete(long id);
    User findByUsername(String username);
    User findById(long id);
    UserDetails findUserByUsername(String username);
    void updateUser(User user);
    User findByUsernameAndPassword(String username, String password);
    boolean systemHasUsername(String username);
}
