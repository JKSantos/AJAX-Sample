function createExtra(){
	var chargeName = document.getElementById("createEChargeName").value;
	var chargeDesc = document.getElementById("createEChargeDesc").value;
	
	if(chargeName == null || chargeName == "" || chargeName == " "
		|| chargeDesc == null || chargeDesc == " " || chargeDesc == ""){
	}
	else{
		$.ajax({
			type: "POST",
			url: "createExtraCharge",
			data: {
				"strECName" : chargeName,
				"strECDetails" : chargeDesc
			},
			dataType: "json",
			async: true,
			success: function(data){
				if (data.result === "success"){
					Materialize.toast('Extra Charge was created successfully.', 3000, 'rounded');
					$('#create').closeModal();
					updateTable();
				}else if (result.status === "failed"){
					Materialize.toast('Something went wrong :(.', 3000, 'rounded');
				}
			},
			error: function(data){
				Materialize.toast('Error occured.', 3000, 'rounded');
			}
		});
	}		
}

function openCreate(){
	
	$('#create').openModal();
		
}

function updateTable(){
$.ajax({
	type : "POST",
	url : "getAllExtraCharge",
	dataType : "json",
	async : "true",
	success : function(data){
		
		var view = '<a data-delay="30" data-position="bottom" data-tooltip="View" class="tooltipped waves-effect waves-light modal-trigger btn-flat transparent black-text" href="#ec${extracharge.intECID}" style="padding-left: 10px;padding-right:10px; margin: 5px;"><i class="material-icons">visibility</i></a> <a data-delay="30" data-position="bottom" data-tooltip="Update" class="tooltipped waves-effect waves-light modal-trigger btn-flat transparent black-text" href="#ec${extracharge.intECID}" style="padding-left: 10px;padding-right:10px; margin: 5px;"><i class="material-icons">edit</i></a> <a data-delay="30" data-position="bottom" data-tooltip="Deactivate" class="tooltipped waves-effect waves-light modal-trigger btn-flat transparent red-text text-accent-4" href="#del<%=exID%>" style="padding-left: 10px;padding-right:10px; margin: 5px;"><i class="material-icons">delete</i></a></center>';
		
		if (data.extra != null){
			var table = $('#example').DataTable();
    		table.clear().draw();
			$.each(data.extra, function(i, extraCharge){
				table.row.add( [
	        		            extraCharge.strECName,
	        		            extraCharge.strECDetails,
	        		            view
	        		            ]);
			});
			table.draw();
		}
	},
	error : function(data){
		Materialize.toast('Error occured.', 3000, 'rounded');
	}
});

}