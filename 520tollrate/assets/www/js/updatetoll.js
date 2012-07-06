document.addEventListener("deviceready", onDeviceReady, false);
var id;
function onDeviceReady() {
	console.log('########in OndeviceReady');
	getcurrentdate();
//	updateClock();
//   	setInterval('updateClock()', 1000);
//   	$('#clock').button('refresh'); 
//   	console.log('########after update');
//   	var offset = -7; // GMT-7 
    
//   	var currentTime = new Date();
     
//    var currentHours = currentTime.getHours ();
//    var currentDay = currentTime.getDay();
//   	updateToll(currentHours, currentDay);
   	
} 
function getcurrentdate() {
    var today = new Date();
	var dayofmonth = today.getDate();
	var dayofweek = today.getDay();
	var year = today.getFullYear();
	var month = today.getMonth();
	var myDays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	var m_names = ["January", "February", "March", 
					"April", "May", "June", "July", "August", "September", 
					"October", "November", "December"];
	//$('#headid').html('520 Toll Rate For <p>'+myDays[dayofweek]+ ', '
	//	+year+'-'+m_names[month]+'-'+dayofmonth+'</p>');
	$('#todayvalue').append('<li>Today is '+ myDays[dayofweek]+ ', '+year+'-'+m_names[month]+'-'+dayofmonth+'</li>');
 	$('#todayvalue').listview('refresh');
}
		 