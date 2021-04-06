$.get("https://ipinfo.io", function (result) {
	if(result) {
	    $("#ip").html("IP : " + result.ip);
	    $("#city").html("City : " + result.city);
	    $("#province").html("Province : " + result.region);
	    $("#country").html("Country : " + result.country);
	    $("#location").html("Lokasi : " + result.loc);
	    $("#company").html("Company : " + result.org);
	    $("#timezone").html("Time Zone : " + result.timezone);
	}
}, "jsonp");