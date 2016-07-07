package com.gss.actions;

import java.util.List;

import com.gss.model.ExtraCharge;
import com.gss.service.ExtraChargeService;
import com.gss.service.ExtraChargeServiceImpl;

public class GetAllExtraCharge {
	
	private List<ExtraCharge> extra;
	private String result;
	
	public String execute(){
		
		ExtraChargeService service = new ExtraChargeServiceImpl();
		this.extra = service.getAllExtraCharges();
		
		if(extra != null)
			result = "success";
		
		return result;
	}

	public List<ExtraCharge> getExtra() {
		return extra;
	}

	public void setExtra(List<ExtraCharge> extra) {
		this.extra = extra;
	}

	public String getResult() {
		return result;
	}
}
