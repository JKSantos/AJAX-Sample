package com.gss.actions;

import com.gss.model.ExtraCharge;
import com.gss.service.ExtraChargeService;
import com.gss.service.ExtraChargeServiceImpl;
import com.opensymphony.xwork2.Action;

public class CreateExtraChargeAction implements Action{

	private String strECName;
	private String strECDetails;
	private String result;
	
	public String execute(){
		
		ExtraChargeService service = new ExtraChargeServiceImpl();
		ExtraCharge extra = new ExtraCharge(1, strECName, strECDetails, 1);
		
		if(service.createExtraCharge(extra) == true)
			result = "success";
		else
			result = "failed";	
		
		return result;	
	}

	public String getStrECName() {
		return strECName;
	}

	public void setStrECName(String strECName) {
		this.strECName = strECName;
	}

	public String getStrECDetails() {
		return strECDetails;
	}

	public void setStrECDetails(String strECDetails) {
		this.strECDetails = strECDetails;
	}

	public String getResult() {
		return result;
	}

}
