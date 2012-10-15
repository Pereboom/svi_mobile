Appdata = Backbone.Model.extend(
{
	defaults:
	{
		menuItems 		: ['home', 'svi', 'shop', 'contact'],
		background	 	: 'img/landscape.jpg',
		dataUrl			: 'localhost/svi/' // deze meegeven in php en setten op body
	}

});

ModelHome = Backbone.Model.extend(
{

	defaults:
	{
		titleWelcome		: 'Svi',
		contentWelcome		: 'lorem ipsum etc..',
		contactdata			: 'industrieweg zuid, 1319 3600 zonhoven, <a href="#">06 41045321</a> <a href="#">info@svi.be</a>',

		titlePromotion		: 'Promotie',
		contentPromotion	: 'uber vette fles wijn',
		img					: 'img/bottle.png',

		titleEvents			: 'laatste event',
		contentEvents		: 'lorem ipsum enzo..',
	}

});

ModelSvi = Backbone.Model.extend(
{

	defaults:
	{
		titleNews			: 'laatste nieuws item',
		contentNews			: 'lorem ipsum nieuws..',

		titleEvents			: 'laatste event',
		contentEvents		: 'lorem ipsum events...',

		titlePers			: 'laatste persbericht',
		contentPers			: 'lorem ipsum pers',
	}

});

ModelEvent = Backbone.Model.extend(
{

	defaults:
	{
		title 				: 'event title',
		content 			: 'lorem ipsum event...',
		location			: 'Maximumawesome ,maastricht',
		date				: '12/10/2012',
		time 				: '10.00 ~ 18.00',

	}
});

ModelEvents = Backbone.Model.extend(
{

	model : ModelEvent

});



