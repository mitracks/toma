 var db = persistence.store.websql.config(persistence, 'toma', 'TOMA Database', 5 * 1024 * 1024);


var Event = persistence.define('Event', { 
	event_id: "INTEGER",
	name: "TEXT",
	description: "TEXT",
	position: "TEXT",
	icon: "TEXT" 

});


persistence.reset();

persistence.schemaSync();

// add event

function dbAddEvent(event){
	Event.findBy('event_id',event.event_id, function(ev){
		if(ev == null ){ 
			var e = new Event(event);
			persistence.add(e)
			persistence.flush(function(){
				 
			});	
		}
	}); 
}

function dbListEvents(){
	Event.all().order('position',true).list(function(data){ 
		$$("#main-article").html(Mustache.to_html($$("#homeTpl").html(), {data: data} )); 
		if(data.length==0){
			getEvents();
		}
	})
}

function showEvent(id){

    Event.load(id,function(ev){  
		$$("#event-details").html(Mustache.to_html($$("#eventTpl").html(), ev )); 
	});

}



