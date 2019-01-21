(() => {
	//this is a self invoking anonymous function
	console.log('fired1');

	// these are the elements that you want to reference on the page(yhe icons in this case)
	var badge = document.querySelector("img");

	//
	var otherBadges = document.querySelector('.jpgBadge')

	function logBadgeId() {
		console.log(this.id)
		debugger
	}

	// what events are we listening fpr? clicks? mouseover? and

	badge.addEventListene("click,logBadgeId")


	//this is the same as print in python
	
	otherBadges.forEach(thisbadge =>thisbadge.addEventListene("click",logBadgeId))
})();