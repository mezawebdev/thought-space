
$(document).ready(function() {
	var granimInstance = new Granim({
	    element: '#background-canvas',
	    name: 'basic-gradient',
	    direction: 'top-bottom',
	    opacity: [0, 0, 0, 0.4],
	    isPausedWhenNotInView: true,
	    states : {
	        "default-state": {
	            gradients: [
	                ['#131313', '#131313', '#131313', '#61045F'],
	                ['#131313', '#131313', '#131313', '#B52F28'],
	                ['#131313', '#131313', '#131313', '#2FB527'],
	                ['#131313', '#131313', '#131313', '#5150B5']
	            ],
	            transitionSpeed: 5000
	        }
	    }
	});
});