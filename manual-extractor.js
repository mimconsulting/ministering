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
	if( households.filter(household => (household.name === $(this).text().trim())).length === 0 ) {
		var household = {};
		household.id = i; i++;
		household.name = $(this).text().trim()

		households.push(household)
	}
});

var assignments = {}; var hhId = 1;
$('.teachers').each(function() { 
	$(this)
		.find('.teacher')
		.each( function() { 
			var assignment = {};
			//assignment.householdId = hhId;

			if( elders.filter(elder => (elder.name === $(this).text().trim())).length === 1 ) {
				var assignment = {};
				assignment.elderId = elders.filter(elder => (elder.name === $(this).text().trim()))[0].id;
				assignment.householdId = hhId;
			}
			assignments.push(assignment);
		}
	);
	hhId++;
}); assignments;



Pending as of May 20th :
Figure out a way to marry the lists, and produce the following reports in a format conducive to excel:

1. households with no assignments
2. elder assignment count (filte to 0 to see those with no assignments)