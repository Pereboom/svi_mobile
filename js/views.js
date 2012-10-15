// views aanmaken
var MenuView = Backbone.View.extend(
{
	el 	: '.menu',

    initialize : function()
    {
      // init
      

    },

    render : function()
    {
		var menuItems = {menuItems : appData.get('menuItems')};
    	var template = _.template(AssetsLoader.returnTemplate('menu').html(), menuItems);

    	$(this.el).html( $(template) );
    },
    
});

var HomeView = Backbone.View.extend(
{
    el          : '.content',

    initialize : function()
    {
      // init
      this.model = new ModelHome();
    },

    render : function(eventName)
    {
        var template = _.template(AssetsLoader.returnTemplate('home').html(), this.model.toJSON());
        $(this.el).html( $(template) );
    },

    close: function()
    {
        this.$el.empty();
        this.$el.unbind();
        this.views = [];
    }

});

var SviView = Backbone.View.extend(
{
    el          : '.content',

    initialize : function()
    {
      // init
      this.model = new ModelSvi();
    },

    render : function(eventName)
    {
        var template = _.template(AssetsLoader.returnTemplate('svi').html(), this.model.toJSON());

        $(this.el).html( $(template) );
    },

    close: function()
    {
       this.$el.empty();
       this.$el.unbind();
       this.views = [];
    }

});

var EventsView = Backbone.View.extend(
{
    el          : '.content',

    initialize : function()
    {
      // init
      var event1 = new ModelEvent({title : 'maximum awesome', content : 'mega vette sjiznit', location : 'sporadigeweg 12, maastricht', date: '11/10/2012', time: '10.00 ~ 21.00'});
      var event2 = new ModelEvent({title : 'maximum awesome', content : 'mega vette sjiznit', location : 'sporadigeweg 12, maastricht', date: '11/10/2012', time: '10.00 ~ 21.00'});
      var event3 = new ModelEvent({title : 'maximum awesome', content : 'mega vette sjiznit', location : 'sporadigeweg 12, maastricht', date: '11/10/2012', time: '10.00 ~ 21.00'});
      var event4 = new ModelEvent({title : 'maximum awesome', content : 'mega vette sjiznit', location : 'sporadigeweg 12, maastricht', date: '11/10/2012', time: '10.00 ~ 21.00'});

      this.evenementen = new ModelEvents([event1, event2, event3, event4]);
      // events is reserved woord
    },

    render : function(eventName)
    {
        var template = _.template(AssetsLoader.returnTemplate('events').html(), {evenementen : this.evenementen.toJSON()});
        $(this.el).html( $(template) );
    },

    close: function()
    {
       this.$el.empty();
       this.$el.unbind();
       this.views = [];
    }

});