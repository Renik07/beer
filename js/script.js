new fullpage('#fullpage', {
	//options here
	
	menu: '#menu',
	lockAnchors: true,
	anchors:['firstPage', 'secondPage', 'thirdPage'],
	navigation: true,
	navigationPosition: 'left',
	navigationTooltips: ['header', 'about us', 'contacts'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
	//Scrolling
	css3: true,
	autoScrolling:true,
	scrollHorizontally: true,
	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: true,
	parallax: true,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: true,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true
});