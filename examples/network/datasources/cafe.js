var nodes = [
   {id: 1, label: 'The WASA2 object-oriented workflow management system', title: 'Authors: ' + 'Gottfried Vossen, Mathias Weske' + '<br>' + 'Venue: ' + 'International Conference on Management of Data' + '<br>' + 'Year:' + '1999', value: 1000, group: 24, x: 1000, y: 100},
  {id: 2, label: 'A user-centered interface for querying distributed multimedia databases', title: 'Authors: ' + 'Isabel F. Cruz, Kimberly M. James' + '<br>' + 'Venue: ' + 'International Conference on Management of Data'+ '<br>' + 'Year:' + '1999', value: 24, group: 11, x: 1000, y: 140},
  {id: 3, label: 'World Wide Database-integrating the Web, CORBA and databases', title: 'Authors: ' + 'Athman Bouguettaya, Boualem Benatallah, Lily Hendra, James Beard, Kevin Smith, Mourad Quzzani' + '<br>' + 'Venue: ' + 'International Conference on Management of Data' + '<br>' + 'Year:' + '1999', value: 22, group: 6, x: 1000, y: 180},
  {id: 4, label: 'XML-based information mediation with MIX', title: 'Authors: ' + 'Chaitan Baru, Amarnath Gupta, Bertram Ludäscher, Richard Marciano, Yannis Papakonstantinou, Pavel Velikhov, Vincent Chu' + '<br>' + 'Venue: ' + 'International Conference on Management of Data' + '<br>' + 'Year:' + '1999', value: 22, group: 5, x: 1000, y: 220},
  {id: 5, label: 'The CCUBE constraint object-oriented database system', title: 'Authors: ' + 'Alexander Brodsky, Victor E. Segal, Jia Chen, Paval A. Exarkhopoulo' + '<br>' + 'Venue: ' + 'International Conference on Management of Data' + '<br>' + 'Year:' + '1999', value: 100, group: 24, x: 1000, y: 260},
  {id: 6, label: 'The Cornell Jaguar project: adding mobility to PREDATOR', title: 'Authors: ' + 'Phillippe Bonnet, Kyle Buza, Zhiyuan Chan, Victor Cheng, Randolph Chung, Takako Hickey, Ryan Kennedy, Daniel Mahashin, Tobias Mayr, Ivan Oprencak, Praveen Seshadri, Hubert Siu' + '<br>' + 'Venue: ' + 'International Conference on Management of Data'+ '<br>' + 'Year:' + '1999', value: 24, group: 11, x: 1000, y: 300},
  {id: 7, label: 'The active MultiSync controller of the cubetree storage organization', title: 'Authors: ' + 'Nick Roussopoulos, Yannis Kotidis, Yannis Sismanis' + '<br>' + 'Venue: ' + 'International Conference on Management of Data' + '<br>' + 'Year:' + '1999', value: 22, group: 6, x: 1000, y: 340},
  {id: 8, label: 'The Jungle database search engine', title: 'Authors: ' + 'Michael Böhlen, Linas Bukauskas, Curtis Dyreson' + '<br>' + 'Venue: ' + 'International Conference on Management of Data' + '<br>' + 'Year:' + '1999', value: 22, group: 5, x: 1000, y: 380},
  {id: 9, label: 'ADEPT: an agent-based approach to business process management', title: 'Authors: ' + 'N. R. Jennings, T. J. Norman, P. Faratin' + '<br>' + 'Venue: ' + 'ACM SIGMOD Record' + '<br>' + 'Year:' + '1998', value: 100, group: 24, x: 1000, y: 420},
  {id: 10, label: 'A componentized architecture for dynamic electronic markets', title: 'Authors: ' + 'Benny Reich, Israel Ben-Shaul' + '<br>' + 'Venue: ' + 'ACM SIGMOD Record'+ '<br>' + 'Year:' + '1998', value: 24, group: 11, x: 1000, y: 460}
];
// create an array with edges
var edges = [
  {from: 1, to: 2},
  {from: 2, to: 3},
  {from: 3, to: 4},
  {from: 4, to: 5},
  {from: 5, to: 6},
  {from: 6, to: 7},
  {from: 7, to: 8},
  {from: 8, to: 9},
  {from: 9, to: 10}
];
