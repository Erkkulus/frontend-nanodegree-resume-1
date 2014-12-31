var bio = 
{
			"name": "Dimitri Reynaga",
			"role": "Software Developer",
			"contacts":
			{
					"mobile": "626 823 8456",
					"email": "dimi.rey@gmail.com",
					"github": "dimirey",
					"twitter": "dimir",
					"location": "Santa Monica"
			},
			"WelcomeMessage": "welcome",
			"skills": 
			[
					"Ruby",
					"Selenium",
					"Cucumber",
					"HTML", 
					"CSS",  
					"Javascript"
			],
			"bioPic": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c49.49.614.614/s320x320/603446_104735223006021_655037216_n.jpg?oh=d9c753f3b13813092344637751b392df&oe=553DC363&__gda__=1430185200_f066fd4cbd5b3fbbcb902854f36067e4",
}

bio.display = function()
{
				var formatedname = HTMLheaderName.replace("%data%", bio.name);
				var formatedrole = HTMLheaderRole.replace("%data%", bio.role);
				var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
				var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
				var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
				var formatedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
				var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
				var formatedpic = HTMLbioPic.replace("%data%", bio.bioPic);
				var formatedmsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);

				$('#header').prepend(formatedrole);
				$('#header').prepend(formatedname);
				$('#topContacts').append(formatedmobile);
				$('#topContacts').append(formatedemail);
				$('#topContacts').append(formatedgithub);
				$('#topContacts').append(formatedtwitter);
				$('#topContacts').append(formatedlocation);
				$('#header').append(formatedpic);
				$('#header').append(formatedmsg);
				$('#header').append(HTMLskillsStart);
				$('#footerContacts').append(formatedmobile);
				$('#footerContacts').append(formatedemail);
				$('#footerContacts').append(formatedgithub);
				$('#footerContacts').append(formatedtwitter);
				$('#footerContacts').append(formatedlocation);

				for(index in bio.skills){
					var formatedskill = HTMLskills.replace("%data%", bio.skills[index]);
					$('#skills').append(formatedskill);
				}
}

var education = 
{
			"schools": 
			[
				{
					"name": "Santa Monica College",
				 	"location": "Santa Monica",
				 	"degree": "Associates",
				 	"majors": "Computer Science",
				 	"dates": 2014,
				 	"url": "http://smc.edu"
				}
			],
			"onlineCourses": 
			[
				{
					"title": "Javascript Crash Course",
					"school": "Udacity",
					"date": 2014,
					"url": "http://www.udacity.com/course/ud804"
				}
			]
}

		education.display = function()
{
			
			for(thing in education.schools){
				var school = education.schools[thing];
				var formatedname = HTMLschoolName.replace("%data%", school.name);
				var formateddegree = HTMLschoolDegree.replace("%data%", school.degree);
				var formateddates = HTMLschoolDates.replace("%data%", school.dates);
				var formatedlocation = HTMLschoolLocation.replace("%data%", school.location);
				var formatedmajors = HTMLschoolMajor.replace("%data%", school.majors);

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formatedname + formateddegree);
				$('.education-entry:last').append(formatedlocation);
				$('.education-entry:last').append(formateddates);
				$('.education-entry:last').append(formatedmajors);
				$('.education-entry:last').children('a').attr("href", school.url);
				
			}

			// $('#education').append(HTMLonlineClasses);	

			for(index in education.onlineCourses){
				var onlineCourse = education.onlineCourses[index];
				var formatedtitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
				var formatedschool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
				var formateddates = HTMLonlineDates.replace("%data%", onlineCourse.date);
				
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formatedtitle + formatedschool);
				$('.education-entry:last').append(formateddates);
				$('.education-entry:last').children('a').attr("href", onlineCourse.url);
			}

}

var work = 
{
			"jobs": [
				{
					"employer": "Tigertext",
					"title": "Software Development Engineer in Test",
					"location": "Santa Monica, CA ",
					"dates": "June 2014 - Present",
					"description": "Used a suite of framework tools, along with appropriate new solutions to creatively build a comprehensive verification automation framework. Responsible for creating a reliable, scalable test toolset approach for assigned product coverage, as well as contributing to the improvement of the release framework. Involved with training employees how to install, launch, and modify tests within the framework. Created test cases and used combination of black and white box testing to assure the release of high quality products."
				},
				{
					"employer": "Oversee.net",
					"title": "QA Automation Engineer",
					"location": "Los Angeles, California",
					"dates": "April 2011 - June 2014",
					"description": "HWas responsible for the quality assurance of 8 different websites. Created and maintained test cases which were later automated using a combination of Selenium and Browserstack which cut regression time down from 24+ hours down to 10. Trained and led a small team of QA Engineers whom I delegated tasks between. Was involved with mostly blackbox testing, and occasionaly whitebox testing. I was also included and gave input during sprint planning and pull requests."
				}
			]
}

work.display = function()
{
			for(index in work.jobs){
				var job = work.jobs[index];
				var formatedemployer = HTMLworkEmployer.replace("%data%", job.employer);
				var formatedtitle = HTMLworkTitle.replace("%data%", job.title);
				var formateddates = HTMLworkDates.replace("%data%", job.dates);
				var formatedlocation = HTMLworkLocation.replace("%data%", job.location);
				var formateddescription = HTMLworkDescription.replace("%data%", job.description);

				$('#workExperience').append(HTMLworkStart);
				$('.work-entry:last').append(formatedemployer + formatedtitle);
				$('.work-entry:last').append(formateddates);
				$('.work-entry:last').append(formatedlocation);
				$('.work-entry:last').append(formateddescription);
				
			}
}

var projects = 
{
	"projects" : 
	[
		 {
			 "title" : "12007",
			 "dates" : "January 2014 - now",
			 "description" : "Music production",
			 "images" : ["https://i1.sndcdn.com/avatars-000057502572-b61mud-t500x500.jpg"]
		 }
	 ]
};

projects.display = function () 
{
	 for (project in projects.projects) 
	 {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		 $(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		 $(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		 $(".project-entry:last").append(formattedDescription);

		 if (projects.projects[project].images.length > 0)
		 {
			 for (image in projects.projects[project].images)
			 {
				 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				 $(".project-entry:last").append(formattedImage);
	 		 }
		 }
 	 }
}

function inName(oldName)
{
			var names = oldName.split(" ");
			names[0] = names[0].slice(0, 1).toUpperCase() + names[0].splice(1).toLowerCase();
			names[1] = names[1].toUpperCase;
			var finalName = names.join(" ");

			return finalName;
}

		bio.display();
		education.display();
		work.display();
		projects.display();
		$('#mapDiv').append(googleMap);