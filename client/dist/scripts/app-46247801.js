"use strict";angular.module("jschannel",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ngRoute","ui.bootstrap","duScroll"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("jschannel").directive("navbar",["$rootScope",function(e){return{restrict:"AE",scope:{},templateUrl:"components/navbar/navbar.html",link:function(a){a.hideMenuList=!1,a.toggleMenuBar=function(){a.hideMenuList=!a.hideMenuList},e.$on("duScrollspy:becameActive",function(){a.hideMenuList=!1})}}}]),angular.module("jschannel").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("jschannel").controller("ModalInstanceCtrl",["$scope","$modalInstance",function(e,a){e.ok=function(){a.close(e.selected.item)},e.closeModal=e.cancel=function(){a.dismiss("cancel")}}]),angular.module("jschannel").controller("FooterCtrl",function(){}),angular.module("jschannel").directive("navShrink",["$timeout",function(e){return{link:function(a,i){a.initScroll=function(i){window.addEventListener("scroll",function(){i.didScroll||(i.didScroll=!0,e(function(){a.scrollPage(i)},250))},!1)},a.scrollPage=function(e){function a(){return window.pageYOffset||document.documentElement.scrollTop}var i=a();i>=300?(e.addClass("navbar-shrink"),angular.element("#back-top").removeClass("hidden")):(e.removeClass("navbar-shrink"),angular.element("#back-top").addClass("hidden")),e.didScroll=!1},a.initScroll($(i))}}}]),angular.module("jschannel").controller("MainCtrl",["$scope","$document","$modal",function(e,a,i){var s=null;e.associations=[{url:"http://www.github.com",hasImg:!0},{url:"http://jsconf.com",text:"JSConf"},{url:"http://communityjs.org",text:"CommunityJS.org"},{url:"http://bangalorejs.org",hasImg:!0}],e.members=[{name:"Amit Anand",twitter:"https://twitter.com/iamitanand",facebook:"https://www.facebook.com/aanand388",linkedin:"http://au.linkedin.com/in/iamitanand",title:"Digital Engagement Manager"},{name:"Amit Kumar",twitter:"https://twitter.com/toamit",facebook:"https://www.facebook.com/toamitkumar",linkedin:"https://www.linkedin.com/in/toamitkumar",title:"Digital Expert"},{name:"Naresh Sharma",twitter:"",facebook:"",linkedin:"",title:""},{name:"Niraj Bhandari",twitter:"https://twitter.com/nirajkbhandari ",facebook:"https://www.facebook.com/nirajkbhandari",linkedin:"http://in.linkedin.com/in/nirajbhandari",title:"Product Manager"},{name:"Suman Paul",twitter:"https://twitter.com/sumankpaul",facebook:"https://www.facebook.com/paul.sumank",linkedin:"https://in.linkedin.com/in/skeep/",title:"Senior Digital Analyst"}],e.scrollToTop=function(){a.scrollTop(0,5e3)},e.openModal=function(e){switch(e){case"conference":s=i.open({templateUrl:"components/modals/conference.html",controller:"ModalInstanceCtrl",size:"lg"})}}}]),angular.module("jschannel").run(["$templateCache",function(e){e.put("app/main/main.html",'<navbar></navbar><header><div class="container"><div class="row"><div class="col-sm-2">&nbsp;</div><div class="col-sm-8 embeded-video"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/eNgOPgZ1aGw" width="300" height="200"></iframe></div></div><div class="col-sm-2">&nbsp;</div></div><div class="row"><div class="col-lg-12 intro-text"><div class="intro-heading">We, The JavaScript People</div></div></div><div class="row"><div class="col-md-7 book-ticket"><form action="http://jschannel.com/subscribe" method="post" class="horizontal-form"><div class="inline-block registrationElements"><div class="silver"><input type="email" name="email" placeholder="Enter your email address" class="block-input margin-right"> <button type="button" class="btn btn-primary button-shadow" id="subscribe" target="_blank">Subscribe to updates</button></div></div></form></div><div class="col-md-5 book-ticket"><a href="http://2015.jschannel.com" target="_blank" class="page-scroll btn btn-primary button-shadow">&nbsp;&nbsp;&nbsp;&nbsp;Book Tickets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> <a href="assets/docs/JSChannel_Sponsorship_2015.pdf" target="_blank" class="page-scroll btn btn-primary button-shadow">Want to Sponsor?</a></div></div></div></header><section id="events"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Events</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row text-center"><div class="col-md-4"><img ng-click="openModal(\'conference\')" class="img-centered img-circle img-responsive" src="assets/images/icons/conference.png" alt=""><h4 class="service-heading">Conferences</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div><div class="col-md-4"><img data-toggle="modal" data-target="meetups" class="img-centered img-circle img-responsive" src="assets/images/icons/meetup-icon.png" alt=""><h4 class="service-heading">Meet-ups</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div><div class="col-md-4"><img data-toggle="modal" data-target="training" class="img-centered img-circle img-responsive" src="assets/images/icons/js-training.png" alt=""><h4 class="service-heading">Trainings</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div></div></div></section><section id="about" class="bg-light-gray"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">About</h2><h3 class="section-subheading text-muted">See JavaScript, like never seen before.</h3></div></div><div class="row"><div class="col-lg-12"><ul class="timeline"><li><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/1.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>2013</h4><h4 class="subheading">Our Humble Beginnings</h4></div><div class="timeline-body"><p class="text-muted">Our first meetup in NCR!</p></div></div></li><li class="timeline-inverted"><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/2.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>7 Sept 2013</h4><h4 class="subheading">A Community is Born</h4></div><div class="timeline-body"><p class="text-muted">Our first conference in NCR!</p></div></div></li><li><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/3.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>16 Nov 2013</h4><h4 class="subheading">Transition to Full Service</h4></div><div class="timeline-body"><p class="text-muted">We run our first conference in Bengaluru!</p></div></div></li><li class="timeline-inverted"><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/3.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>18-19 July 2014</h4><h4 class="subheading">Next big leap</h4></div><div class="timeline-body"><p class="text-muted">We ran India\'s largest JS conference in Bengaluru!</p></div></div></li><li><div class="timeline-image"><h4>Be Part<br>Of Our<br>Story!</h4></div><div class="timeline-panel"><div class="timeline-heading"><h4>17-18 July 2015</h4><h4 class="subheading">Our next chapter</h4></div><div class="timeline-body"><p class="text-muted">Next conference in Bengaluru!</p></div></div></li></ul></div></div></div></section><aside class="clients" id="partners"><div class="container"><div class="row"><div class="col-md-3 col-sm-6" ng-repeat="association in associations"><a href="{{association.url}}"><img ng-src="assets/images/associations/{{$index+1}}.png" class="img-responsive img-centered" alt="" ng-if="association.hasImg"> <span ng-if="!association.hasImg">{{association.text}}</span></a></div></div></div></aside><section id="team" class="bg-light-gray"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Our Amazing Team</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-sm-3" ng-repeat="member in members"><div class="team-member"><a ng-href="{{member.twitter}}" target="_blank"><img ng-src="assets/images/members/{{$index+1}}.jpg" class="img-responsive img-circle" alt=""></a><h4>{{member.name}}</h4><p class="text-muted">{{member.title}}</p><ul class="list-inline social-buttons"><li><a ng-href="{{member.twitter}}" target="_blank"><i class="fa fa-twitter"></i></a></li><li><a ng-href="{{member.facebook}}" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a ng-href="{{member.linkedin}}" target="_blank"><i class="fa fa-linkedin"></i></a></li></ul></div></div></div><div class="row"><div class="col-lg-8 col-lg-offset-2 text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div></div></div></section><ng-include src="\'components/footer/footer.html\'"></ng-include><div class="portfolio-modal modal fade" id="conference" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img class="img-responsive" src="img/portfolio/roundicons-free.png" alt=""><p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p><p><strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p><ul class="list-inline"><li>Date: July 2014</li><li>Client: Round Icons</li><li>Category: Graphic Design</li></ul><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Heading</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img class="img-responsive img-centered" src="img/portfolio/startup-framework-preview.png" alt=""><p><a href="http://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p><p>You can preview Startup Framework <a href="http://designmodo.com/startup/?u=787">here</a>.</p><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img class="img-responsive img-centered" src="img/portfolio/treehouse-preview.png" alt=""><p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p><p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img class="img-responsive img-centered" src="img/portfolio/golden-preview.png" alt=""><p>Start Bootstrap\'s Agency theme is based on Golden, a free PSD website template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p><p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img class="img-responsive img-centered" src="img/portfolio/escape-preview.png" alt=""><p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p><p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img class="img-responsive img-centered" src="img/portfolio/dreams-preview.png" alt=""><p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p><p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div>'),e.put("components/footer/footer.html",'<footer ng-controller="FooterCtrl"><div class="container"><div class="row"><div class="col-md-4"><span class="copyright">Copyright &copy; JSChannel 2013-2015</span></div><div class="col-md-4"><ul class="list-inline social-buttons"><li><a href="https://twitter.com/js_channel/"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.facebook.com/javascriptchannel" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a href="https://plus.google.com/111069083279946389343/"><i class="fa fa-google-plus"></i></a></li><li><a href="http://www.linkedin.com/groups?home=&gid=5112841"><i class="fa fa-linkedin"></i></a></li><li><a href="https://www.youtube.com/channel/UCdf_Ezv2lcB9OKE_4N23w1A"><i class="fa fa-youtube"></i></a></li><li><a href="https://www.flickr.com/photos/100543192@N08/sets/72157646036037789/"><i class="fa fa-flickr"></i></a></li></ul></div><div class="col-md-4"><ul class="list-inline quicklinks"><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div></div></div></footer><p id="back-top" class="hidden" ng-click="scrollToTop()"><a href="#page-top" du-scrollspy="page-top" offset="30" du-smooth-scroll="">Back to Top</a></p>'),e.put("components/modals/conference.html",'<div class="container jsc-modal"><div class="row"><div class="col-md-8"><h2 class="text-muted">Conferences</h2></div><div class="col-md-4"><div class="close-modal" ng-click="closeModal()"><div class="lr"><div class="rl"></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="modal-body"><div class="timeline-container clearfix"><div id="time-line"></div><div class="time-to-filter clearfix" id="2014"><p class="timeline-filter"><span>2014</span></p><span class="top-ring"></span> <span class="bottom-ring"></span></div><article class="timeline-item standard-post clearfix"><div class="timeline-icon"><div><p data-icon=""></p></div><span class="dotted-horizon"></span> <span class="vertical-line"></span> <span class="circle-outer"></span> <span class="circle-inner"></span></div><div class="entry-body clearfix"><div class="kp-thumb hover-effect"><img src="assets/images/modal/2014-conf.jpg" alt=""></div><div><h3 class="entry-title"><a href="#">JS Conference 2014</a></h3><span class="entry-date"><span class="icon-clock-4 entry-icon" aria-hidden="true"></span><span>July 18-19, 2014</span></span></div><p>Autem sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci</p><a href="http://2014.jschannel.com" target="_blank" class="more-link">Know more&nbsp;<i class="fa fa-chevron-circle-right"></i></a></div></article><div class="time-to-filter clearfix" id="october"><p class="timeline-filter"><span>2013</span></p><span class="top-ring"></span> <span class="bottom-ring"></span></div><article class="timeline-item standard-post clearfix"><div class="timeline-icon"><div><p data-icon=""></p></div><span class="dotted-horizon"></span> <span class="vertical-line"></span> <span class="circle-outer"></span> <span class="circle-inner"></span></div><div class="entry-body clearfix"><div class="kp-thumb hover-effect"><img src="placeholders/post-image/post-1.jpg" alt=""></div><div><h3 class="entry-title"><a href="#">JS Conference 2013 - BLR</a></h3><span class="entry-date"><span class="icon-clock-4 entry-icon" aria-hidden="true"></span><span>November 7, 2013</span></span></div><p>Autem sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci</p><a href="http://2013.jschannel.com" target="_blank" class="more-link">Know more&nbsp;<i class="fa fa-chevron-circle-right"></i></a></div></article><article class="timeline-item standard-post clearfix"><div class="timeline-icon"><div><p data-icon=""></p></div><span class="dotted-horizon"></span> <span class="vertical-line"></span> <span class="circle-outer"></span> <span class="circle-inner"></span></div><div class="entry-body clearfix"><div class="kp-thumb hover-effect"><img src="placeholders/post-image/post-1.jpg" alt=""></div><div><h3 class="entry-title"><a href="#">JS Conference 2013 - NCR</a></h3><span class="entry-date"><span class="icon-clock-4 entry-icon" aria-hidden="true"></span><span>September 7, 2013</span></span></div><p>Autem sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci</p><a href="http://2013.jschannel.com" target="_blank" class="more-link">Know more&nbsp;<i class="fa fa-chevron-circle-right"></i></a></div></article><a href="#" class="load-more kp-tooltip" data-toggle="tooltip" data-original-title="Load More"><i class="icon-plus"></i></a></div><div class="closemodal-button"><button type="button" class="btn btn-primary" ng-click="closeModal()"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div>'),e.put("components/modals/myModalContent.html",'<div ng-controller="ModalDemoCtrl"><script type="text/ng-template" id="myModalContent.html"><div class="modal-header"> <h3 class="modal-title">I am a modal!</h3> </div> <div class="modal-body"> <ul> <li ng-repeat="item in items"> <a ng-click="selected.item = item">{{ item }}</a> </li> </ul> Selected: <b>{{ selected.item }}</b> </div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="ok()">OK</button> <button class="btn btn-warning" ng-click="cancel()">Cancel</button> </div></script><button class="btn btn-default" ng-click="open()">Open me!</button> <button class="btn btn-default" ng-click="open(\'lg\')">Large modal</button> <button class="btn btn-default" ng-click="open(\'sm\')">Small modal</button><div ng-show="selected">Selection from a modal: {{ selected }}</div></div>'),e.put("components/navbar/navbar.html",'<nav nav-shrink="" class="navbar navbar-default navbar-fixed-top" ng-controller="NavbarCtrl"><div class="container"><div class="navbar-header page-scroll col-md-4"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" ng-click="toggleMenuBar()"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button><a href="#page-top" class="navbar-brand page-scroll logo" title="Javascript Enthusiasts Community" du-scrollspy="page-top" offset="30" du-smooth-scroll=""><img src="assets/images/jslogo.png" alt="JSCHANNEL."></a><br><br><span class="nav-text"><a href="http://2015.jschannel.com">17-18 JULY 2015, Bangalore, India <i class="fa fa-chevron-circle-right"></i></a></span></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1 col-md-8" ng-class="hideMenuList ? \'in\' : \'out\'"><ul class="nav navbar-nav navbar-right"><li class="hidden"><a href="#page-top" du-scrollspy="page-top" offset="30" du-smooth-scroll=""></a></li><li du-scrollspy="events" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#events" du-scrollspy="events" offset="30" du-smooth-scroll="">Events</a></li><li du-scrollspy="about" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#about" du-scrollspy="about" offset="30" du-smooth-scroll="">About</a></li><li du-scrollspy="partners" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#partners" du-scrollspy="partners" offset="30" du-smooth-scroll="">Partners</a></li><li du-scrollspy="team" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#team" du-scrollspy="team" offset="30" du-smooth-scroll="">Team</a></li></ul></div></div></nav>')}]);