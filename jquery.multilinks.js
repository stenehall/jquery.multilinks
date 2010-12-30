/*
 * Multilinks - jQuery plugin
 * written by stenehall
 * http://stenehall.github.com
 *
 * Licensed under something...
 *
 *
 * Usage:
 *
 * Initialize the script with some options.
 ***********************************

 jQuery(document).ready(function() {
	jQuery.multilinks();
 });

 *
 * No idea if it works on any browser except FF3.6 on OS X 10.6
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

jQuery.extend({
	multilinks: function(options){

		// default configuration properties
		var defaults = {
			// @todo add default class here
		};
		options = $.extend( defaults, options );
	
		var links = new Array;
		var i = f = 0;

		jQuery(document).ready(function() {
			jQuery('a').each(function(){
				if (links[this.href] !== undefined)
				{
					this.className = 'multilink-'+links[this.href]+' '+this.className;
				}
				else
				{
					links[this.href] = i++;
					this.className = 'multilink-'+links[this.href]+' '+this.className;
				}
			});
			for(; f<i; f++)
			{
				var link = '.multilink-'+f;
				jQuery(link).hover(function(link)
				{
					jQuery('.'+link.currentTarget.classList[0]).toggleClass('hover');
				});
			}
		});
		
		function oc(a)
		{
		  var o = {};
		  for(var i=0;i<a.length;i++)
		  {
		    o[a[i]]='';
		  }
		  return o;
		}
	}
});