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
    
    //Плавный скроллинг
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
           scrollTop: $(el).offset().top}, 2000);
        return false; 
    });
    
    //Исправление бага: сдвиг верхнего меню при вызове модального окна
    $('.head_h1').click(function(){
        alert('hello');
    });
    $('.g-button__callback').width();
    
    //callbackModal

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
        singleItem : true//,
        //transitionStyle: "backSlide"
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
    
    //Кнопка Наверх
    $('#back-top').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    //$("#back-top").hide();
    $(window).scroll(function() {
        var heightScreen = $(document).scrollTop();
        var heightMain= $('.g-header_main').height();
        if (heightScreen > heightMain) {
            $("#back-top").addClass('btn_show');
            $("#back-top").css('bottom', '100px');
        }else{
            $("#back-top").removeClass('btn_show');
        };
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
        navigationText: "123, 231"
     });

     //Slider Clients
    $("#owl-sliser-logo-black").owlCarousel({
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

        
    //Magnific Popup
    $('.g-link-overlay').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-fade'
    });
    
    //Исправляем баг со сдвигом меню
    //$('.g-button__callback').on('click', function(){
        //var wht = $(".g-header_top__menu").width();
        //$(".g-header_top__menu").width('500');
    //});
    //Фиксированное меню
    /*$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 650) $(".g-header_top__menu").removeClass('float').css({position: 'absolute'});
    else $(".g-header_top__menu").addClass('float').css({position: 'fixed'});
    });*/
    
    //Фиксированный блок на странице с примером сайта
    /* function popUpSites(){
        if($(document).width() > 992) {
            $(".sites_desc_wrap").removeClass('sites_fixed');
            $(".sites_desc_wrap").removeClass('sites_float');
            $(window).scroll(function() {
                var wrap = $('.sites_img_wrap').height();
                $('.sites_desc_wrap_wrap').height(wrap);
                var topScreen = $(document).scrollTop();
                var heighScreen = $('.sites_img_wrap').height() - 150;
                if (topScreen > 650) {
                    $(".sites_desc_wrap").addClass('sites_float');
                        if (topScreen > heighScreen) {
                            $(".sites_desc_wrap").removeClass('sites_float');
                            $(".sites_desc_wrap").addClass('sites_float_bot');
                        }
                        else $(".sites_desc_wrap").removeClass('sites_float_bot');;
                    }else{
                        $(".sites_desc_wrap").removeClass('sites_float');
                    };

        });
        }else{
            $(".sites_desc_wrap").removeClass('sites_float');
            $(".sites_desc_wrap").addClass('sites_fixed');
        };
    };
    popUpSites();
    $(window).resize(function(){
        popUpSites();
    }); */
    
    
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


(function(c){function g(b,a){this.element=b;this.options=c.extend({},h,a);c(this.element).data("max-height",this.options.maxHeight);c(this.element).data("height-margin",this.options.heightMargin);delete this.options.maxHeight;if(this.options.embedCSS&&!k){var d=".readmore-js-toggle, .readmore-js-section { "+this.options.sectionCSS+" } .readmore-js-section { overflow: hidden; }",e=document.createElement("style");e.type="text/css";e.styleSheet?e.styleSheet.cssText=d:e.appendChild(document.createTextNode(d));
document.getElementsByTagName("head")[0].appendChild(e);k=!0}this._defaults=h;this._name=f;this.init()}var f="readmore",h={speed:100,maxHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,sectionCSS:"display: block; width: 100%;",startOpen:!1,expandedClass:"readmore-js-expanded",collapsedClass:"readmore-js-collapsed",beforeToggle:function(){},afterToggle:function(){}},k=!1;g.prototype={init:function(){var b=this;c(this.element).each(function(){var a=
c(this),d=a.css("max-height").replace(/[^-\d\.]/g,"")>a.data("max-height")?a.css("max-height").replace(/[^-\d\.]/g,""):a.data("max-height"),e=a.data("height-margin");"none"!=a.css("max-height")&&a.css("max-height","none");b.setBoxHeight(a);if(a.outerHeight(!0)<=d+e)return!0;a.addClass("readmore-js-section "+b.options.collapsedClass).data("collapsedHeight",d);a.after(c(b.options.startOpen?b.options.lessLink:b.options.moreLink).on("click",function(c){b.toggleSlider(this,a,c)}).addClass("readmore-js-toggle"));
b.options.startOpen||a.css({height:d})});c(window).on("resize",function(a){b.resizeBoxes()})},toggleSlider:function(b,a,d){d.preventDefault();var e=this;d=newLink=sectionClass="";var f=!1;d=c(a).data("collapsedHeight");c(a).height()<=d?(d=c(a).data("expandedHeight")+"px",newLink="lessLink",f=!0,sectionClass=e.options.expandedClass):(newLink="moreLink",sectionClass=e.options.collapsedClass);e.options.beforeToggle(b,a,f);c(a).animate({height:d},{duration:e.options.speed,complete:function(){e.options.afterToggle(b,
a,f);c(b).replaceWith(c(e.options[newLink]).on("click",function(b){e.toggleSlider(this,a,b)}).addClass("readmore-js-toggle"));c(this).removeClass(e.options.collapsedClass+" "+e.options.expandedClass).addClass(sectionClass)}})},setBoxHeight:function(b){var a=b.clone().css({height:"auto",width:b.width(),overflow:"hidden"}).insertAfter(b),c=a.outerHeight(!0);a.remove();b.data("expandedHeight",c)},resizeBoxes:function(){var b=this;c(".readmore-js-section").each(function(){var a=c(this);b.setBoxHeight(a);
(a.height()>a.data("expandedHeight")||a.hasClass(b.options.expandedClass)&&a.height()<a.data("expandedHeight"))&&a.css("height",a.data("expandedHeight"))})},destroy:function(){var b=this;c(this.element).each(function(){var a=c(this);a.removeClass("readmore-js-section "+b.options.collapsedClass+" "+b.options.expandedClass).css({"max-height":"",height:"auto"}).next(".readmore-js-toggle").remove();a.removeData()})}};c.fn[f]=function(b){var a=arguments;if(void 0===b||"object"===typeof b)return this.each(function(){if(c.data(this,
"plugin_"+f)){var a=c.data(this,"plugin_"+f);a.destroy.apply(a)}c.data(this,"plugin_"+f,new g(this,b))});if("string"===typeof b&&"_"!==b[0]&&"init"!==b)return this.each(function(){var d=c.data(this,"plugin_"+f);d instanceof g&&"function"===typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(a,1))})}})(jQuery);


$('.g-read-more').readmore({
    speed: 500,
    maxHeight: 350,
    moreLink: '<a class="g-link-more" href="#">Подробнее...</a>',
    lessLink: '<a class="g-link-less" href="#">Скрыть</a>'
});