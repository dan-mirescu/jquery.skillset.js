/*
	jquery.skillset.js
	version 0.1.0
	(C) Dan Mirescu 2014
	https://github.com/dan-mirescu/jquery.skillset.js

	This script enables you to showcase your skills or other items of your choice
    with various progress states shown as progress bars.
*/


jQuery.fn.skillSet = function(skills, config) {
	var $ = jQuery;
	var rootDiv = $(this[0]);
	var div = $('<div class="inner-wrapper"></div>');
	rootDiv.append(div);

	var C = typeof (config) != 'undefined';
	var chk = function (prop) { return typeof (config[prop]) != 'undefined'; };
	var cfg = {
		collapseHeight : C && chk('collapseHeight') ? config.collapseHeight * 1 : null,
		readMoreString : C && chk('readMoreString') ? config.readMoreString : "Read more",
		collapseString : C && chk('collapseString') ? config.collapseString : "Collapse",
	};

	if(cfg.collapseHeight) {
		var overlayHeight = Math.min(cfg.collapseHeight / 2, 125);
		rootDiv.css({ height: cfg.collapseHeight, overflow: 'hidden', position: 'relative' });
		div.append('<div class="overlay" style="height:' + overlayHeight + 'px"><div class="toggler">' + cfg.readMoreString + '</div></div>');
		rootDiv.append('<div class="collapser">' + cfg.collapseString + '</div>');
		
		div.find(".toggler").click(function() {
			rootDiv.animate({ height: div.outerHeight() + rootDiv.find(".collapser").outerHeight() });
			div.find(".overlay").hide();
		});
		rootDiv.find(".collapser").click(function() {
			rootDiv.animate({ height: cfg.collapseHeight }, 400, 'swing', function() {
				div.find(".overlay").fadeIn();
			});
		});
	}
	for(var heading in skills) {
		div.append('<div class="heading">' + heading + '</div>');
	
		for(var skillName in skills[heading]) {
			var row = $('<div class="row"></div>');
			
			var skill = $('<div class="skill"></div>');
			var score = parseFloat(skills[heading][skillName]);
			if(score !=0 && !score) { skill.addClass("full-row"); }
			if(skillName[0] == "#") { skillName = skillName.substr(1); skill.addClass("subHeading"); row.addClass("no-hover"); }
			skill.append(skillName);
			row.append(skill);
			
			if(!skill.hasClass("subHeading") && (score == 0 || score)) {
				if(score > 1) score = 1;
				row.append('<div class="score-wrap"><div class="score" style="width:' + score*100 + '%;"></div></div>');
			}
			
			div.append(row);
		}
	}
};