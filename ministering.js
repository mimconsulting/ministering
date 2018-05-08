var teachees = '';$('.column-one .teachee a').each(function() { teachees += '|'; teachees += $(this).text()});

var assignments = ''; var firstTeacher=true;
$('.teachers').each(function() { 
	if (firstTeacher) { firstTeacher = false; }
	else { assignments += '|'; }
	
	var firstAssignment = true;

	$(this)
		.find('.teacher')
		.each( function() { 
			if (firstAssignment) { firstAssignment = false; }
			else { assignments+= ' & '; }
			
			assignments += $(this).text().trim(); 
		}
	);
});