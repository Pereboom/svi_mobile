// global app vars
appData = new Appdata();

// app init
$(document).ready(function()
{
	AssetsLoader.load('template');
    AssetsLoader.loadBackground();
	/*
	assets laden
	*/

});

// laadt de templates
var AssetsLoader = {

	template       : {},
    bg             : '',

	load:function(name)
	{
		var that = this;

		$.get('templates/' + name + '.html', function(data)
		{
			that.template = data;
			that.loadComplete();
			//parent.returnTemplate();
		});

	},

	returnTemplate:function(id)
	{
		var tpl = $(this.template);
		
		return tpl.find('.' + id);
	},

    loadBackground:function()
    {
        var img;

        img           = new Image();
        img.src       = appData.get('background');

        img.onload    = function()
        {
            $('body').css({'background' : 'url(' + img.src + ') no-repeat center center fixed',
                '-webkit-background-size' : 'cover',
                '-moz-background-size' : 'cover',
                '-o-background-size' : 'cover',
                'background-size' : 'cover'});
        };
    
        //$('myOjbect').css('background-image', 'url(' + imageUrl + ')');
        
    },

	loadComplete:function()
	{
		App.init();
	}

}

var App = {

	init:function()
	{
		/*
		config instellen
		views aanmaken
		router instellen
		*/

		router = new Router;
    	Backbone.history.start();
	}
}

// app router, regelt de views
var Router = Backbone.Router.extend(
{
    currentView : '',

    routes : {
    	''             : 'home',
    	'/'            : 'home',
        'home'         : 'home',
    	'svi'		   : 'svi',
    	'shop'		   : 'shop',
        'contact'      : 'contact',
        'events'       : 'events',
        'events/:id'   : 'events',
    },

    /*
    hier functies van router aanmaken,
    deze regelt de logica & routing van de views
    */

    initialize:function()
    {
    	menu = new MenuView();
        menu.render();
        // deze functie wordt altijd als eerst aangeroepen
    },

    home:function()
    {
        home = new HomeView();
        this.changePage(home);
    },

    svi:function()
    {
    	svi = new SviView();
        this.changePage(svi);
    },

    events:function(id)
    {
        if(id == undefined)
        {
            events = new EventsView();
            this.changePage(events);
        } else {
            console.log('display : ' + id);
        }
    },

    changePage:function( page )
    {
        if(this.currentView == '')
        {
            this.currentView = page;
            page.render();
        } else {
            
            this.currentView.close();
            this.currentView = page;
            page.render();
        }
    }

});