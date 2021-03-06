package com.gss.model;

import java.util.Date;
import java.util.List;

public class WalkIn {
	
	private int intWalkInID;
	private String strName;
	private String strContactNo;
	private Date datWalkIn;
	private String walkInTime;
	private List<ServiceWalkIn> services;
	private List<ProductWalkIn> products;
	private List<PackageWalkIn> packages;
	private List<Promo> promo;
	private Invoice invoice;
	private Payment payment;
	private String strWalkInStatus;
	private String strPaymentStatus;
	
	
	public WalkIn(int intWalkInID, String strName, String strContactNo, List<ServiceWalkIn> services, List<ProductWalkIn> products, List<PackageWalkIn> packages, List<Promo> promo, Invoice invoice, Payment payment, String strWalkInStatus, String strPaymentStatus){
		
		this.intWalkInID = intWalkInID;
		this.strName = strName;
		this.strContactNo = strContactNo;
		this.services = services;
		this.products = products;
		this.packages = packages;
		this.promo = promo;
		this.invoice = invoice;
		this.payment = payment;
		this.strWalkInStatus = strWalkInStatus;
		this.strPaymentStatus = strPaymentStatus;
	}


	public int getIntWalkInID() {
		return intWalkInID;
	}


	public void setIntWalkInID(int intWalkInID) {
		this.intWalkInID = intWalkInID;
	}


	public String getStrName() {
		return strName;
	}


	public void setStrName(String strName) {
		this.strName = strName;
	}


	public String getStrContactNo() {
		return strContactNo;
	}


	public Date getDatWalkIn() {
		return datWalkIn;
	}


	public String getWalkInTime() {
		return walkInTime;
	}


	public void setWalkInTime(String walkInTime) {
		this.walkInTime = walkInTime;
	}


	public void setDatWalkIn(Date datWalkIn) {
		this.datWalkIn = datWalkIn;
	}


	public void setStrContactNo(String strContactNo) {
		this.strContactNo = strContactNo;
	}


	public List<ServiceWalkIn> getServices() {
		return services;
	}


	public void setServices(List<ServiceWalkIn> services) {
		this.services = services;
	}


	public List<ProductWalkIn> getProducts() {
		return products;
	}


	public void setProducts(List<ProductWalkIn> products) {
		this.products = products;
	}


	public List<PackageWalkIn> getPackages() {
		return packages;
	}


	public void setPackages(List<PackageWalkIn> packages) {
		this.packages = packages;
	}


	public List<Promo> getPromo() {
		return promo;
	}


	public void setPromo(List<Promo> promo) {
		this.promo = promo;
	}


	public Invoice getInvoice() {
		return invoice;
	}


	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}


	public Payment getPayment() {
		return payment;
	}


	public void setPayment(Payment payment) {
		this.payment = payment;
	}


	public String getStrWalkInStatus() {
		return strWalkInStatus;
	}


	public void setStrWalkInStatus(String strWalkInStatus) {
		this.strWalkInStatus = strWalkInStatus;
	}


	public String getStrPaymentStatus() {
		return strPaymentStatus;
	}


	public void setStrPaymentStatus(String strPaymentStatus) {
		this.strPaymentStatus = strPaymentStatus;
	}

}
