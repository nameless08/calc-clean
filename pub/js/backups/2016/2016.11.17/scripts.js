$(document).ready(function() {

    //Высота header по высоте экрана
    //function heightDetect(){
        //$('.g-header_main').css('min-height', $(window).height());
    //};
        //heightDetect();
    //$(window).resize(function(){
        //heightDetect();
    //});
    
    new WOW().init();
    
    //Адаптивное верхнее меню
    $('.btn.responsive-menu').on('click', function() {
        $(this).toggleClass('opn');
    });
    $('.navbar .nav li a').on('click', function() {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.btn.responsive-menu').removeClass('opn');
    });
    
    //Vertical Menu Script
	$('.g-header__menu_vertical').click(function(){
 		$('.g-header__menu_left').addClass('g-header__menu_left_open');
	});
	$('.btn_close').click(function(){
 		$('.g-header__menu_left').removeClass('g-header__menu_left_open');
	});
    
    //Slider CL-Results
    $("#owl-clresults").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        navigationText: "",
        
    });
    
    //Slider Our-works
    $("#owl-site-exmpl").owlCarousel({
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 3,
        itemsDesktop : [1366,3], 
        itemsDesktopSmall : [1215,2], 
        itemsTablet: [700,1], 
        itemsMobile : [320,1], 
        navigationText: ""   
    });
    
    //Slider Reviews
    $("#owl-site-rewiew").owlCarousel({
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigationText: "",
        singleItem : true,
        transitionStyle: "backSlide"
    });
    
    //Slider Clients
    $("#tls_logo_slider").owlCarousel({
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 6,
        itemsDesktop : [1366,5], 
        itemsDesktopSmall : [1215,5], 
        itemsTablet: [700,3], 
        itemsMobile : [320,2], 
        navigationText: ""
     });
    
    //Slider Sertificate
    $("#sertificate_slider").owlCarousel({
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4,
        //itemsDesktop : [1366,5], 
        //itemsDesktopSmall : [1215,5], 
        //itemsTablet: [700,3], 
        //itemsMobile : [320,2], 
        navigationText: ""
     });
    
    //Magnific Popup
    $('.g-link-overlay').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-fade'
    });
    
    //Фиксированное меню
    $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 650) $(".g-header_top__menu").removeClass('float').css({position: 'absolute'});
    else $(".g-header_top__menu").addClass('float').css({position: 'fixed'});
    });
    
    //Стилизация Цены и предложения
    $('.g-screen__boxes-wrap .g-box_prices.g-1:nth-child(2)').removeClass('g-1');
    $('.g-screen__boxes-wrap .g-box_prices:nth-child(2)').addClass('g-2 g-active');
    $('.g-screen__boxes-wrap .g-box_prices:nth-child(3)').removeClass('g-1');
    $('.g-screen__boxes-wrap .g-box_prices:nth-child(3)').addClass('g-3');

    $(function() { $('input').styler(); });

        $('[data-trig-list="1"]').click(function(){

            $('[data-list="1"]').slideToggle(300);
            $('[data-trig-list="1"]').toggleClass('open-list');

        });

        $('[data-trig-list="2"]').click(function(){

            $('[data-list="2"]').slideToggle(300);
            $('[data-trig-list="2"]').toggleClass('open-list');

        });

        $('[data-trig-list="3"]').click(function(){

            $('[data-list="3"]').slideToggle(300);
            $('[data-trig-list="3"]').toggleClass('open-list');

        });


});

//JS

//Список городов
function DropDown(el) {
	this.dd = el;
	this.placeholder = this.dd.children('span');
	this.opts = this.dd.find('ul.cityul > li');
	this.val = '';
	this.index = -1;
	this.initEvents();
}
DropDown.prototype = {
	initEvents : function() {
		var obj = this;
		obj.dd.on('click', function(event){
			$(this).toggleClass('active');
			return false;
		});
		obj.opts.on('click',function(){
			var opt = $(this);
			obj.val = opt.text();
			obj.index = opt.index();
			obj.placeholder.text(+ obj.val);
		});
    },
		getValue : function() {
			return this.val;
		},
		getIndex : function() {
			return this.index;
		}
	}

$(function() {
	var dd = new DropDown( $('#dd') );
	$(document).click(function() {
		// all dropdowns
		$('.wrapper-dropdown-1').removeClass('active');
	});
});