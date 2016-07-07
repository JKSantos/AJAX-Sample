package com.gss.model;

import java.util.List;

public class PromoWalkIn {
	
	private int intPromoWalkInID;
	private Promo promo;
	private Package packages;
	private List<ServiceAssignment> services;
	
	public PromoWalkIn(int intPromoWalkInID, Promo promo, Package packages, List<ServiceAssignment> services){
		
		this.intPromoWalkInID = intPromoWalkInID;
		this.promo = promo;
		this.packages = packages;
		this.services = services;
	}

	public int getIntPromoWalkInID() {
		return intPromoWalkInID;
	}

	public void setIntPromoWalkInID(int intPromoWalkInID) {
		this.intPromoWalkInID = intPromoWalkInID;
	}

	public Promo getPromo() {
		return promo;
	}

	public void setPromo(Promo promo) {
		this.promo = promo;
	}

	public Package getPackages() {
		return packages;
	}

	public void setPackages(Package packages) {
		this.packages = packages;
	}

	public List<ServiceAssignment> getServices() {
		return services;
	}

	public void setServices(List<ServiceAssignment> services) {
		this.services = services;
	}
}
