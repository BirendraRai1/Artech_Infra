// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons

// To create custom buttons at something like (icons loaded from FontAwsome: 
// 'mybutton':   { class: 'git', use: true, link: 'http://github.com', icon: 'github', title: 'My title for the button' },

$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/sharer/sharer.php?u=http%3A//www.artechinfra.in', extras: 'target="_blank"' },
    'linkedin':   { class: 'linkedin', use: true, link: 'https://www.linkedin.com/shareArticle?mini=true&url=http%3A//www.artechinfra.in&title=Your%20Title&summary=&source=', extras: 'target="_blank"' },
    //'google':     { class: 'gplus',    use: true, link: 'https://plus.google.com/share?url=http%3A//www.artechinfra.in', extras: 'target="_blank"' },
	'twitter':    { class: 'twitter',  use: true, link: 'https://twitter.com/home?status=http%3A//www.artechinfra.in', extras: 'target="_blank"' },
	'whatsapp':   { class: 'whatsapp',      use: true, link: '#', icon: 'whatsapp', title: 'Share with WhatsApp' },
    'phone':      { class: 'phone separated',    use: true, link: '+919575160000' },
    'email':      { class: 'email',    use: true, link: 'info@artechinfra.in' }
  }
});

//On click function. If the class 'whatsapp' is clicked, run the function below 
		$(document).ready(function() {

			$(document).on("click",'.whatsapp',function() {

		//Check for mobile devices
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var text = 'Your Whatsapp display text';
				var url = 'http://www.artechinfra.in/';
				var message = encodeURIComponent(text)+" - "+encodeURIComponent(url);
				var whatsapp_url = "whatsapp://send?text="+message;
				window.location.href= whatsapp_url;
		} else {
			
		//Send alert if the click is not on a mobile device	
		//alert("Only available for mobile devices");
		}

			});
		});
		

//Check if the visitor is on a mobile device
		var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
		if (mobile) { 
		//Do nothing
		} 
		else 
		{ 
			//alert("This demo is only working on a mobile device");
			$('.whatsapp').css('display', 'none'); // OR you can use $('.navWrap').hide();
		}
