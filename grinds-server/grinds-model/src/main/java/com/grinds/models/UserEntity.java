package com.grinds.models;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.grinds.model.api.User;
import com.grinds.model.api.UserRole;
import com.grinds.models.utility.EntityDataConverters.UserRoleConverter;
import com.grinds.models.validators.NoHtml;
import com.grinds.models.validators.ValidPassword;

@Entity(name = "UserEntity")
@Table(name = "t_user")
public class UserEntity implements User{
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "ID")
    private long id;
	
    @Column(name = "FIRST_NAME")
    @NotNull
    @NoHtml
    @Size(min=2, max=40)
    private String firstName;
    
    @Column(name = "LAST_NAME")
    @NotNull
    @NoHtml
    @Size(min=2, max=40)
    private String lastName;
    
    @Column(name = "USERNAME")
    @NotNull
    @NoHtml
    @Size(min=6, max=30)
    private String username;
    
    @Column(name = "PASSWORD")
    @NotNull
    @NoHtml
    @ValidPassword(message="validation.password.notValid")
    private String password;
    
    @Column(name="EMAIL_ADDRESS")
    @NotNull
    @NoHtml
    @Email(message="{validation.email.notValid}")
	private String emailAddress;
    
    @Column(name = "USER_ROLE")
    @NoHtml
	@Convert(converter = UserRoleConverter.class)
	private UserRole userRole;
    
    @Column(name="OCUPATION")
    @NoHtml
	private String ocupation;
    
    @Column(name="TEACHING_EXPERIENCE")
    @NoHtml
	private String teachingExperience;

    @Override
	public String getOcupation() {
		return ocupation;
	}
    @Override
	public void setOcupation(String ocupation) {
		this.ocupation = ocupation;
	}
    @Override
	public String getTeachingExperience() {
		return teachingExperience;
	}
    @Override
	public void setTeachingExperience(String teachingExperience) {
		this.teachingExperience = teachingExperience;
	}

	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public UserRole getUserRole() {
		return userRole;
	}

	public void setUserRole(UserRole userRole) {
		this.userRole = userRole;
	}
	
	
	
}
