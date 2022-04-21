package com.examly.springapp.controller;

import util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.*;
import com.examly.springapp.service.*;

@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
@RequestMapping("/admin/")
public class AdminController {
	
	
	private AdminService adminservice=new AdminService();
	
	//for loan details admin rest API
	@GetMapping("/getAllLoans")
	public List<AdminModel> approveLoan()
	{
		return (List<AdminModel>) adminservice.approvedLoan();
	}
	//for edit LOAN
	@PutMapping("/editLoan/{id}") 
	public ResponseEntity<AdminModel> editLoan(@PathVariable int id,@RequestBody AdminModel repaymentUser)
	{
		return adminservice.editLoan(id, repaymentUser);	
	}
	//for getting findById
	@GetMapping("/deleteLoan/{id}")
	public ResponseEntity<AdminModel> getById(@PathVariable int id)
	{
		AdminModel admin= adminservice.getById(id);
		return ResponseEntity.ok(admin);
	}
	
	//for delete loan rest API
	@DeleteMapping("/deleteLoan/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteLoan(@PathVariable int id)
	{
		AdminModel admin= adminservice.getById(id);
		adminservice.deleteloan(admin);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);	
	}
	//for approving the status
	@PutMapping("/editStatusA/{id}")
	public ResponseEntity<AdminModel> editstatusA(@PathVariable int id,@RequestBody AdminModel userObj)
	{
		return adminservice.editstatusA(id, userObj);
	}
	//for rejecting the status
	@PutMapping("/editStatusR/{id}")
	public ResponseEntity<AdminModel> editstatusR(@PathVariable int id,@RequestBody AdminModel userObj)
	{
		return adminservice.editstatusR(id, userObj);
	}
	//for editing Repayment Schedule
	@PutMapping("/editRepaymentSchedule/{id}") 
	public ResponseEntity<AdminModel> editRepaymentSchedule(@PathVariable int id,@RequestBody AdminModel repaymentUser)
	{
		deleteRepaymentSchedule(id,repaymentUser);
		return adminservice.editRepaymentSchedule(id, repaymentUser);	
	}
	@GetMapping("/generateSchedule/{id}")
	public int calculateEmi(@PathVariable int id)
	{
		AdminModel admin= adminservice.getById(id);
	   return  adminservice.calculateEmi(admin);
	}
	//for delete the repayment Schedule
	@PutMapping("/deleteRepaymentSchedule/{id}")
	public ResponseEntity<AdminModel> deleteRepaymentSchedule(@PathVariable int id,@RequestBody AdminModel repaymentuser)
	{
		return adminservice.deleteRepaymentSchedule(id, repaymentuser);	
	}
}