package com.examly.springapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.*;

@Repository
public interface AdminRepository extends CrudRepository<AdminModel, Integer> {

	AdminModel getById(int id);	
}
