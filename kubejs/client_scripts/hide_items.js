RecipeViewerEvents.removeEntries('item', event => {
	//Add tags to remove them from the JEI/EMI menu. 
	event.remove('#kubejs:hidden_item')
	event.remove('#kubejs:admin_item')
})
