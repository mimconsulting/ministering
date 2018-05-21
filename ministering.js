1. Navigate to Organizations, Elders, Members: https://www.lds.org/mls/mbr/orgs/180799?lang=eng&members

var elders = [];var i = 1;
$('member-card a').each(function() { 
	if( elders.filter(elder => (elder.name === $(this).text().trim())).length === 0 ) {
		var elder = {};
		elder.id = i; i++;
		elder.name = $(this).text().trim();
		//elders += '|'; elders += $(this).text()

		elders.push(elder);
	}	
});
JSON.stringify(elders);

2. Copy the JSON output to use next


3. Navigate to Organizations, Ministering Elders, Households: https://www.lds.org/htvt/?lang=eng#/overview
var elders = JSON.parse('<paste in the JSON output>');

var households = []; var i = 1;
$('.column-one .teachee a').each(function() { 
	if( households.filter(elder => (elder.name === $(this).text().trim())).length === 0 ) {
		var household = {};
		household.id = i; i++;
		household.name = $(this).text().trim()

		households.push(household)
	}
});

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



Pending as of May 20th :
Add priesthood office to the Elders array contents
Figure out a way to marry the lists, and produce the following reports in a format conducive to excel:

1. households with no assignments
2. elder assignment count (filte to 0 to see those with no assignments)