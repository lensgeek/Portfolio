// media query event handler
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 500px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change - content swaping more than anything else. Mobile first - Tablet - Screen
function WidthChange(mq) {

	if (mq.matches) {
		// window width is at least 500px
	}
	else {
		// window width is less than 500px
	}

}


