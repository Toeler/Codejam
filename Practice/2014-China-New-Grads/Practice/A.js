var codejam = require('../../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 0,
		outputToConsole: true
	});

function canGoOnTeam(person, team, allPeople) {
	for (var i = 0; i < team.length; ++i) {
		var teamPerson = team[i];
		if (allPeople[teamPerson].contains(person) && allPeople[person].contains(team[i])) {
			return false;
		}
	}
	return true;
}

function solve(teams, queue, allPeople) {
	if (queue.length === 0) {
		return true;
	}

	var q = queue.slice(),
		person = q.pop(),
		newTeam1 = [teams[0].slice(), teams[1].slice()],
		newTeam2 = [teams[0].slice(), teams[1].slice()],
		result = false;

	newTeam1[0].push(person);
	newTeam2[1].push(person);

	result = 	(canGoOnTeam(person, newTeam1[0], allPeople) && solve(newTeam1, q, allPeople))
			||  (canGoOnTeam(person, newTeam2[1], allPeople) && solve(newTeam2, q, allPeople));

	return result;
}

challenge.start(function (data) {
	var people = {}, uniquePeople = [];
	data.forEach(function(pairStr) {
		var pair = pairStr.split(' ');

		if (!people[pair[0]]) {
			people[pair[0]] = [];
		}
		if (!people[pair[1]]) {
			people[pair[1]] = [];
		}

		people[pair[0]].push(pair[1]);
		people[pair[1]].push(pair[0]);
		uniquePeople.pushIfNotExists(pair[0]);
		uniquePeople.pushIfNotExists(pair[1]);
	});

	var team1 = [], team2 = [], teams = [team1, team2], result = false;

	result = solve(teams, uniquePeople, people);

	/*for (var i = 0; i < uniquePeople.length; ++i) {
		var person = uniquePeople[i];

		if (canGoOnTeam(person, team1, people)) {
			team1.push(person);
		} else if (canGoOnTeam(person, team2, people)) {
			team2.push(person);
		} else {
			var fixed = false;
			for (var j = 0; j < team1.length; ++j) {
				var teamPerson = team1[j];
				if (canGoOnTeam(people[teamPerson], team2, people)) {
					team2.push(teamPerson);
					team1[j] = person;
				}
			}
			if (!fixed) {
				return "No";
			}
		}
	}*/

	return result ? "Yes" : "No";
});