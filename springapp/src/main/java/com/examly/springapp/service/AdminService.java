package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.model.AdminModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.repository.AdminRepository;

@Service
public class AdminService {
	
	
	private AdminRepository adminRepository;

	private AdminModel adminmodel=new AdminModel();
	
	//for loan details data
	public List<AdminModel> approvedLoan()
	{
		return (List<AdminModel>)adminRepository.findAll();
	}	
	
	//for get by Id data
	public AdminModel getById(int id)
	{
		return (AdminModel) adminRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Loan does not exist with id :"+id));
	}
	
	//for deleting the loan 
	public void deleteloan(AdminModel am)
	{
		adminRepository.delete(am);
	}
	 
	//for editing status as Approved
	public ResponseEntity<AdminModel>  editstatusA(int id,AdminModel userObj)
	{
		AdminModel userobj=adminRepository.getById(id);
		userobj.setStatus("Approved");
		AdminModel user=adminRepository.save(userobj);
		return ResponseEntity.ok(user);
	}
	//for editing status as Rejected
	public ResponseEntity<AdminModel>  editstatusR(int id,AdminModel userObj)
	{
		AdminModel userobj=adminRepository.getById(id);
		userobj.setStatus("Rejected");
		AdminModel user=adminRepository.save(userobj);
		return ResponseEntity.ok(user);
	}
	//for editing the LOAN 
	public ResponseEntity<AdminModel> editLoan(int id,AdminModel repaymentUser)
	{
		AdminModel repaymentuser=adminRepository.getById(id);
		repaymentuser.setApplicantName(repaymentUser.getApplicantName());
		repaymentuser.setApplicantAadhar(repaymentUser.getApplicantAadhar());
		repaymentuser.setApplicantAddress(repaymentUser.getApplicantAddress());
		repaymentuser.setApplicantEmail(repaymentUser.getApplicantEmail());
		repaymentuser.setApplicantPan(repaymentUser.getApplicantPan());
		repaymentuser.setApplicantPhone(repaymentUser.getApplicantPhone());
		repaymentuser.setApplicantSalary(repaymentUser.getApplicantSalary());
		repaymentuser.setLoanAmountRequired(repaymentUser.getLoanAmountRequired());
		repaymentuser.setLoanRepaymentMonths(repaymentUser.getLoanRepaymentMonths());
		AdminModel user=adminRepository.save(repaymentuser);
		return ResponseEntity.ok(user);
	}
	//for editing the repayment schedule
	public ResponseEntity<AdminModel> editRepaymentSchedule(int id,AdminModel repaymentUser)
	{
		AdminModel repaymentuser=adminRepository.getById(id);
		repaymentuser.setLoanAmountRequired(repaymentUser.getLoanAmountRequired());
		repaymentuser.setLoanRepaymentMonths(repaymentUser.getLoanRepaymentMonths());
		AdminModel user=adminRepository.save(repaymentuser);
		return ResponseEntity.ok(user);
	}
	
	//for delete the repayment Schedule
	public ResponseEntity<AdminModel> deleteRepaymentSchedule(int id,AdminModel repaymentUser)
	{
		AdminModel repaymentuser=adminRepository.getById(id);
		int a=0;
		repaymentuser.setEmi(a);
		AdminModel user=adminRepository.save(repaymentuser);
		return ResponseEntity.ok(user);
	}
	
	public int getLoanID(AdminModel am)
	{
		return am.getApplicantLoanId();
	}
	
	//for calculating the EMI
	public int calculateEmi(AdminModel am)
	{
		int x=Integer.parseInt(am.getLoanAmountRequired());
		int y=Integer.parseInt(am.getLoanRepaymentMonths());
		int z=(x/y);
		am.setEmi(z);
		adminRepository.save(am);
		return z;
	}
}
