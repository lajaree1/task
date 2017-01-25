var fs = require("fs");
var jsonfile = require('jsonfile')
var Table = require('easy-table');
var file = 'source.json'
 jsonfile.readFile(file, function (err, data) {
	 var table=new Table
	 data.forEach(function(student){
		 table.cell('id',student.id)
		  table.cell('fName',student.fName)
		   table.cell('lName',student.lName)
		    table.cell('score',student.score)
			table.newRow()
	 })
	 table.sort(['score|des'])
	 console.log(table.toString());
 
fs.writeFile('destination.txt',table,{"encoding":'utf8'},  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('destination.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
	
});
	 })