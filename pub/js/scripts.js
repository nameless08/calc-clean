jQuery(document).ready(function() {


    jQuery('.footer__mid_menu li a:contains("Карта сайта")').hover(function(){

        jQuery('#footerLinking').slideToggle('300');

    });


    jQuery('input').styler(); 

    new WOW().init();
    
    //Адаптивное верхнее меню
    jQuery('.btn.responsive-menu').on('click', function() {
        jQuery(this).toggleClass('opn');
    });
    jQuery('.navbar .nav li a').on('click', function() {
        jQuery('.navbar .navbar-collapse.in').collapse('hide');
        jQuery('.btn.responsive-menu').removeClass('opn');
    });
    
    // плавный скролинг
    jQuery('#menu-navigatsionnoe-menyu-glavnoj-stranitsy a[href^="#"]').click(function(){
        var el = jQuery(this).attr('href');
        jQuery('body').animate({
           scrollTop: jQuery(el).offset().top}, 2000);
        return false; 
    });
    
    //Vertical Menu Script
	jQuery('.g-header__menu_vertical').click(function(){
 		jQuery('.g-header__menu_left').addClass('g-header__menu_left_open');
	});
	jQuery('.btn_close').click(function(){
 		jQuery('.g-header__menu_left').removeClass('g-header__menu_left_open');
	});
    
    //Slider CL-Results
    jQuery("#owl-clresults").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        pagination : false,
        paginationSpeed : 400,
        singleItem:true,
        navigationText: "",
        
    });
    
    //Slider Our-works
    jQuery("#owl-site-exmpl").owlCarousel({
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
    jQuery("#owl-site-rewiew").owlCarousel({
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigationText: "",
        singleItem : true//,
        //transitionStyle: "backSlide"
    });
    
    //Slider Clients
    jQuery("#tls_logo_slider").owlCarousel({
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
    jQuery('#back-top').on('click', function(){
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    });
    
    //$("#back-top").hide();
    jQuery(window).scroll(function() {
        var heightScreen = jQuery(document).scrollTop();
        var heightMain= jQuery('.g-header_main').height();
        if (heightScreen > heightMain) {
            jQuery("#back-top").addClass('btn_show');
            jQuery("#back-top").css('bottom', '100px');
        }else{
            jQuery("#back-top").removeClass('btn_show');
        };
    });
    
    
    //Slider Sertificate
    jQuery("#sertificate_slider").owlCarousel({
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4,
        navigationText: "123, 231"
     });

     //Slider Clients
    jQuery("#owl-sliser-logo-black").owlCarousel({
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

    jQuery('[data-popup="magnificant"]').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-fade'
    });

    jQuery('.g-link-overlay').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-fade'
    });
    
    //Стилизация Цены и предложения
    jQuery('.g-screen__boxes-wrap .g-box_prices.g-1:nth-child(2)').removeClass('g-1');
    jQuery('.g-screen__boxes-wrap .g-box_prices:nth-child(2)').addClass('g-2 g-active');
    jQuery('.g-screen__boxes-wrap .g-box_prices:nth-child(3)').removeClass('g-1');
    jQuery('.g-screen__boxes-wrap .g-box_prices:nth-child(3)').addClass('g-3');


    jQuery('.g-screen__boxes-wrap .g-box_prices:nth-child(2) .eModal-4').removeClass('eModal-4').addClass('eModal-5');
    jQuery('.g-screen__boxes-wrap .g-box_prices:nth-child(3) .eModal-4').removeClass('eModal-4').addClass('eModal-6');


        jQuery('[data-trig-list="1"]').click(function(){

            jQuery('[data-list="1"]').slideToggle(300);
            jQuery('[data-trig-list="1"]').toggleClass('open-list');

        });

        jQuery('[data-trig-list="2"]').click(function(){

            jQuery('[data-list="2"]').slideToggle(300);
            jQuery('[data-trig-list="2"]').toggleClass('open-list');

        });

        jQuery('[data-trig-list="3"]').click(function(){

            jQuery('[data-list="3"]').slideToggle(300);
            jQuery('[data-trig-list="3"]').toggleClass('open-list');

        });

/////////////////////////////////
//ЗАКРЫТИЕ ОКНА УДАЧНОЙ ОТПРАВКИ
/////////////////////////////////
jQuery('.close_accepted').click( function(){ 
	jQuery('#send_ok').hide();
});


});

//JS


////////////////////////
//ФУНКЦИЯ ОТПРАВКИ ФОРМЫ
////////////////////////
function formGoodOne (){
    document.getElementById('eModal-1').style.display = "none";
    document.getElementById('emodal-overlay').style.display = "none";
    document.getElementById('send_ok').style.display = "block";
}


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
			jQuery(this).toggleClass('active');
			return false;
		});
		obj.opts.on('click',function(){
			var opt = jQuery(this);
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

jQuery(function() {
	var dd = new DropDown( jQuery('#dd') );
	jQuery(document).click(function() {
		// all dropdowns
		jQuery('.wrapper-dropdown-1').removeClass('active');
	});
});


(function(c){function g(b,a){this.element=b;this.options=c.extend({},h,a);c(this.element).data("max-height",this.options.maxHeight);c(this.element).data("height-margin",this.options.heightMargin);delete this.options.maxHeight;if(this.options.embedCSS&&!k){var d=".readmore-js-toggle, .readmore-js-section { "+this.options.sectionCSS+" } .readmore-js-section { overflow: hidden; }",e=document.createElement("style");e.type="text/css";e.styleSheet?e.styleSheet.cssText=d:e.appendChild(document.createTextNode(d));
document.getElementsByTagName("head")[0].appendChild(e);k=!0}this._defaults=h;this._name=f;this.init()}var f="readmore",h={speed:100,maxHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,sectionCSS:"display: block; width: 100%;",startOpen:!1,expandedClass:"readmore-js-expanded",collapsedClass:"readmore-js-collapsed",beforeToggle:function(){},afterToggle:function(){}},k=!1;g.prototype={init:function(){var b=this;c(this.element).each(function(){var a=
c(this),d=a.css("max-height").replace(/[^-\d\.]/g,"")>a.data("max-height")?a.css("max-height").replace(/[^-\d\.]/g,""):a.data("max-height"),e=a.data("height-margin");"none"!=a.css("max-height")&&a.css("max-height","none");b.setBoxHeight(a);if(a.outerHeight(!0)<=d+e)return!0;a.addClass("readmore-js-section "+b.options.collapsedClass).data("collapsedHeight",d);a.after(c(b.options.startOpen?b.options.lessLink:b.options.moreLink).on("click",function(c){b.toggleSlider(this,a,c)}).addClass("readmore-js-toggle"));
b.options.startOpen||a.css({height:d})});c(window).on("resize",function(a){b.resizeBoxes()})},toggleSlider:function(b,a,d){d.preventDefault();var e=this;d=newLink=sectionClass="";var f=!1;d=c(a).data("collapsedHeight");c(a).height()<=d?(d=c(a).data("expandedHeight")+"px",newLink="lessLink",f=!0,sectionClass=e.options.expandedClass):(newLink="moreLink",sectionClass=e.options.collapsedClass);e.options.beforeToggle(b,a,f);c(a).animate({height:d},{duration:e.options.speed,complete:function(){e.options.afterToggle(b,
a,f);c(b).replaceWith(c(e.options[newLink]).on("click",function(b){e.toggleSlider(this,a,b)}).addClass("readmore-js-toggle"));c(this).removeClass(e.options.collapsedClass+" "+e.options.expandedClass).addClass(sectionClass)}})},setBoxHeight:function(b){var a=b.clone().css({height:"auto",width:b.width(),overflow:"hidden"}).insertAfter(b),c=a.outerHeight(!0);a.remove();b.data("expandedHeight",c)},resizeBoxes:function(){var b=this;c(".readmore-js-section").each(function(){var a=c(this);b.setBoxHeight(a);
(a.height()>a.data("expandedHeight")||a.hasClass(b.options.expandedClass)&&a.height()<a.data("expandedHeight"))&&a.css("height",a.data("expandedHeight"))})},destroy:function(){var b=this;c(this.element).each(function(){var a=c(this);a.removeClass("readmore-js-section "+b.options.collapsedClass+" "+b.options.expandedClass).css({"max-height":"",height:"auto"}).next(".readmore-js-toggle").remove();a.removeData()})}};c.fn[f]=function(b){var a=arguments;if(void 0===b||"object"===typeof b)return this.each(function(){if(c.data(this,
"plugin_"+f)){var a=c.data(this,"plugin_"+f);a.destroy.apply(a)}c.data(this,"plugin_"+f,new g(this,b))});if("string"===typeof b&&"_"!==b[0]&&"init"!==b)return this.each(function(){var d=c.data(this,"plugin_"+f);d instanceof g&&"function"===typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(a,1))})}})(jQuery);


jQuery('.g-read-more').readmore({
    speed: 500,
    maxHeight: 350,
    moreLink: '<a class="g-link-more" href="#">Подробнее...</a>',
    lessLink: '<a class="g-link-less" href="#">Скрыть</a>'
});

jQuery('.g-read-more2').readmore({
    speed: 500,
    maxHeight: 400,
    moreLink: '<a class="g-link-more" href="#">Подробнее...</a>',
    lessLink: '<a class="g-link-less" href="#">Скрыть</a>'
});

jQuery(document).ready(function() { 

     

       jQuery('.rotation-animation').mouseenter(function(){

            jQuery(this).addClass('rotation-gear');

        });

        jQuery('.rotation-animation').mouseleave(function(){

            jQuery(this).removeClass('rotation-gear');

        });


  


});

jQuery(document).ready(function() {

	var block = document.querySelector('.sites_desc_wrap');

	console.log(block);

	if(block !== null) {
        
        var winWidth = jQuery(window).width();  // получение ширины экрана 

        var debug = false,
            
            blockHeight = block.offsetHeight, // высота фиксируемого блока
            blockIndent = 370, //block.getBoundingClientRect().top,  отступ блока от края браузера
        
            container = document.querySelector('.sites_desc_wrap_wrap'), // контейнер блока
            containerHeight = document.querySelector('.sites_img_wrap').offsetHeight,
            
            stopHeight = ((containerHeight + blockIndent) - blockHeight), // точка остановки
            scroolTop = document.body.scrollTop; // получение значения прокрутки при перезагрузки страницы 

            jQuery(window).resize(function(){ 
                winWidth = $(window).width(); // переприсвоение значение при изменении 
                 if(winWidth < 1010) { 
                    container.style.height = 'auto';
                };
            }); 

            if(scroolTop > blockIndent && scroolTop < stopHeight && winWidth > 1010){
                block.style.position = 'fixed';
                block.style.top = '0';
            };

            window.addEventListener('scroll', fixedBlock, false); 

            function fixedBlock(){

                scroolTop = document.body.scrollTop; // обновление значения при прокрутке
                                
                if(scroolTop > blockIndent && winWidth > 1010){

                    block.style.position = 'fixed';
                    block.style.top = '0'; 
                    block.style.width = '570px';

                };

                if(scroolTop > ((blockIndent + containerHeight) - blockHeight) && winWidth > 1010){

                    block.style.position = 'absolute';
                    block.style.top = (containerHeight - blockHeight)  + 'px';

                };
     
                if(scroolTop < blockIndent || winWidth < 1010) {

                    block.removeAttribute('style');

                };

                if(debug) { console.log('Значение прокрутки: ' + scroolTop) };

            }; 

    	if(debug) {

	        console.log('Отступ блока от верхнего края окна: ' + blockIndent + 'px');
	        console.log('Высота фиксируемого блока: ' + blockHeight + 'px');
	        console.log('***');
	        console.log('Высота контейнера: ' + containerHeight + 'px');
	        console.log('***')
	        console.log('Значение прокрутки при обновлении документа: ' + scroolTop + 'px');
            
    	};
	};
});



function PrintElem(elem) { 
    Popup($(elem).html()); 
} 

function Popup(data) { 
    var mywindow = window.open('', 'printdiv', 'height=400,width=600'); 
    mywindow.document.write('<html><head>'); 
    mywindow.document.write('</head><body >'); 
    mywindow.document.write(data); 
    mywindow.document.write('</body></html>'); 
    mywindow.document.close(); // necessary for IE >= 10 
    mywindow.focus(); // necessary for IE >= 10 
    mywindow.print(); 
    mywindow.close(); 
    return true; 
} 