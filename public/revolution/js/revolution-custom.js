/*

Template: Webster - Responsive Multi-purpose HTML5 Template
Author: potenzaglobalsolutions.com
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file includes all revolution slider scripts.

*/

(function($){
  "use strict";

/*************************************
 		slider 01
 **************************************/
 var revapi11,
  tpj=jQuery;
     tpj(document).ready(function() {
        if(tpj("#rev_slider_11_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_11_1");
        }else{
          revapi11 = tpj("#rev_slider_11_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"zeus",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:0,
                tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      }); 

 /*************************************
 		slider 02
 **************************************/
  var revapi15,
   tpj=jQuery;
     tpj(document).ready(function() {
        if(tpj("#rev_slider_15_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_15_1");
        }else{
          revapi15 = tpj("#rev_slider_15_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"dione",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'<div class="tp-arr-imgwrapper"><div class="tp-arr-imgholder"></div></div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:0,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:0,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      }); 

 /*************************************
 		slider 03
 **************************************/
   var revapi17,
    tpj=jQuery;
       tpj(document).ready(function() {
        if(tpj("#rev_slider_17_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_17_1");
        }else{
          revapi17 = tpj("#rev_slider_17_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              onHoverStop:"off",
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            parallax: {
              type:"mouse",
              origo:"enterpoint",
              speed:400,
                          speedbg:0,
                          speedls:0,
              levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });  

 /*************************************
 		slider 04
 **************************************/
  var revapi13,
     tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_13_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_13_1");
        }else{
          revapi13 = tpj("#rev_slider_13_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"hermes",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:0,
                tmp:'<div class="tp-arr-allwrapper">  <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider 05
 **************************************/

   var revapi1,
     tpj=jQuery;
       tpj(document).ready(function() {
        if(tpj("#rev_slider_1_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_1_1");
        }else{
          revapi1 = tpj("#rev_slider_1_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              bullets: {
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                style:"hermes",
                hide_onleave:false,
                direction:"vertical",
                h_align:"right",
                v_align:"center",
                h_offset:20,
                v_offset:0,
                                space:5,
                tmp:''
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider 06
 **************************************/
   var revapi16,
     tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_16_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_16_1");
        }else{
          revapi16 = tpj("#rev_slider_16_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"custom",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });
 

 /*************************************
 		slider 07
 **************************************/
   var revapi2,
    tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_2_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_2_1");
        }else{
          revapi2 = tpj("#rev_slider_2_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"erinyen",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div> <span class="tp-arr-titleholder">{{title}}</span> </div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider 08
 **************************************/
    var revapi18,
      tpj=jQuery;
       tpj(document).ready(function() {
        if(tpj("#rev_slider_18_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_18_1");
        }else{
          revapi18 = tpj("#rev_slider_18_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              onHoverStop:"off",
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"none",
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      }); 

 /*************************************
 		slider 10
 **************************************/
    var revapi14,
                tpj=jQuery;
            tpj(document).ready(function() {
        if(tpj("#rev_slider_14_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_14_1");
        }else{
          revapi14 = tpj("#rev_slider_14_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              bullets: {
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                style:"zeus",
                hide_onleave:false,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:20,
                                space:5,
                tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:850,
            lazyType:"none",
            parallax: {
              type:"mouse",
              origo:"enterpoint",
              speed:400,
                          speedbg:0,
                          speedls:0,
              levels:[2,3,6,8,10,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 			index-cafe
 **************************************/
 
     var revapi9,
      tpj=jQuery;
        tpj(document).ready(function() {
        if(tpj("#rev_slider_9_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_9_1");
        }else{
          revapi9 = tpj("#rev_slider_9_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"uranus",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            parallax: {
              type:"mouse",
              origo:"enterpoint",
              speed:400,
                          speedbg:0,
                          speedls:0,
              levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider construction
 **************************************/
   var revapi19,
      tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_19_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_19_1");
        }else{
          revapi19 = tpj("#rev_slider_19_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"gyges",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1270,
            gridheight:800,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider consulting
 **************************************/
    var revapi8,
     tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_8_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_8_1");
        }else{
          revapi8 = tpj("#rev_slider_8_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"hermes",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'<div class="tp-arr-allwrapper">  <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:800,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider gym
 **************************************/
 var revapi4,
  tpj=jQuery;
     tpj(document).ready(function() {
        if(tpj("#rev_slider_4_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_4_1");
        }else{
          revapi4 = tpj("#rev_slider_4_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"zeus",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:1000,
            lazyType:"none",
            shadow:0,
            spinner:"off",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider  interior-design
 **************************************/
  var revapi5,
     tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_5_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_5_1");
        }else{
          revapi5 = tpj("#rev_slider_5_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"hebe",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'<div class="tp-title-wrap">  <span class="tp-arr-titleholder">{{title}}</span>    <span class="tp-arr-imgholder"></span> </div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:1000,
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
 		slider medical
 **************************************/
 var revapi6,
   tpj=jQuery;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_6_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_6_1");
        }else{
          revapi6 = tpj("#rev_slider_6_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"metis",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:30
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:30
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

 /*************************************
    slider mobile-app
 **************************************/
  var revapi7,
    tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_7_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_7_1");
        }else{
          revapi7 = tpj("#rev_slider_7_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              onHoverStop:"off",
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:1000,
            lazyType:"none",
            parallax: {
              type:"mouse",
              origo:"enterpoint",
              speed:400,
                          speedbg:0,
                          speedls:0,
              levels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

  /*************************************
    slider shop 01
 **************************************/
  var revapi10,
  tpj=jQuery;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_10_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_10_1");
        }else{
          revapi10 = tpj("#rev_slider_10_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              arrows: {
                style:"gyges",
                enable:true,
                hide_onmobile:false,
                hide_onleave:false,
                tmp:'',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:800,
            lazyType:"none",
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });

  /*************************************
    slider shop 02
 **************************************/
 
     var revapi20,
       tpj=jQuery;
       tpj(document).ready(function() {
        if(tpj("#rev_slider_20_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_20_1");
        }else{
          revapi20 = tpj("#rev_slider_20_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              keyboardNavigation:"off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
              onHoverStop:"off",
              touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"hermes",
                enable:true,
                hide_onmobile:true,
                hide_under:767,
                hide_onleave:false,
                tmp:'<div class="tp-arr-allwrapper">  <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:20,
                                    v_offset:0
                }
              }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      });  

  /*************************************
     pizza
 **************************************/
     var revapi278,
      tpj=jQuery;
       tpj(document).ready(function() {
        if(tpj("#rev_slider_278_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_278_1");
        }else{
          revapi278 = tpj("#rev_slider_278_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              onHoverStop:"off",
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            parallax: {
              type:"mouse",
              origo:"enterpoint",
              speed:400,
                          speedbg:0,
                          speedls:0,
              levels:[1,2,3,4,5,6,7,8,9,10,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      }); 

  /*************************************
            juice
 **************************************/
    var revapi279,
      tpj=jQuery;
        tpj(document).ready(function() {
        if(tpj("#rev_slider_279_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_279_1");
        }else{
          revapi279 = tpj("#rev_slider_279_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
              onHoverStop:"off",
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1920,
            gridheight:900,
            lazyType:"none",
            parallax: {
              type:"mouse",
              origo:"enterpoint",
              speed:400,
                          speedbg:0,
                          speedls:0,
              levels:[1,2,3,4,5,6,7,8,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      }); 
  
 
 })(jQuery);