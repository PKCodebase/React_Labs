package com.register.repository;
import com.register.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Registration,Long>{

    boolean  existsByEmail(String email);
    boolean existsByPhone(String phone);

}
