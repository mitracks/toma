var host = 'http://localhost:3000';
host = 'http://10.0.0.8:3000';
var width=320;
var height=480;
Lungo.ready(function() {

	var env = $$.environment();
	width = env.screen.width;
	height = env.screen.height;
	square = width / 2;
	 
	dbListEvents();

	$$('.home-square').tap(function() { 
		Lungo.Router.section("second");
		showEvent($$(this).attr('data'))
	});

	$$('.back').tap(function() {
		Lungo.Router.back();
	});

});


function getEvents(){ 
	var url = host +'/api/events.json'; 
	$$.json(url, {} , function(data){   
		for(var i=0;i<data.length;i++){
			dbAddEvent(data[i]);
		}
		dbListEvents();
	});  
} 
 