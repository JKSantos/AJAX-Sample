package com.gss.model;

public class ServiceAssignment {
	
	private int intServiceAssignmentID;
	private int intEmployeeID;
	private String strJobStatus;
	
	public ServiceAssignment(int intServiceAssignmentID, int intEmployeeID, String strJobStatus){
		
		this.intServiceAssignmentID = intServiceAssignmentID;
		this.intEmployeeID = intEmployeeID;
		this.strJobStatus = strJobStatus;
	}

	public int getIntServiceAssignmentID() {
		return intServiceAssignmentID;
	}

	public void setIntServiceAssignmentID(int intServiceAssignmentID) {
		this.intServiceAssignmentID = intServiceAssignmentID;
	}

	public int getIntEmployeeID() {
		return intEmployeeID;
	}

	public void setIntEmployeeID(int intEmployeeID) {
		this.intEmployeeID = intEmployeeID;
	}

	public String getStrJobStatus() {
		return strJobStatus;
	}

	public void setStrJobStatus(String strJobStatus) {
		this.strJobStatus = strJobStatus;
	}
}
