$(document).ready(function(){$(&quot;.toggleMenu&quot;).click(function(){$(&quot;.dropdowns&quot;).toggleClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.darkshadow&quot;).click(function(){$(&quot;.dropdowns&quot;).removeClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.darkshadow&quot;).click(function(){$(&quot;.darkshadow&quot;).removeClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.toggleMenu&quot;).click(function(){$(&quot;.darkshadow&quot;).toggleClass(&quot;shows&quot;);});});
//<![CDATA[
// Sub Nav
var Script=function(){jQuery('.nav-menu2 .sub-menu > a').click(function(){var last=jQuery('.sub-menu.open',$('.nav-menu2'));last.removeClass("open");jQuery('.dropdown').addClass("open");jQuery('.dropdown',last).removeClass("open");jQuery('.sub',last).slideUp(300);var sub=jQuery(this).next();if(sub.is(":visible")){jQuery('.dropdown',jQuery(this)).removeClass("open");jQuery(this).parent().removeClass("open");sub.slideUp(300)}else{jQuery('.dropdown',jQuery(this)).addClass("open");jQuery(this).parent().addClass("open");sub.slideDown(300)}var o=($(this).offset());diff=300-o.top;if(diff>0)$(".nav-menu2").scrollTo("-="+Math.abs(diff),500);else $(".nav-menu2").scrollTo("+="+Math.abs(diff),500)})}();
//]]>
