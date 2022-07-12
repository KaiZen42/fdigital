const Chart = () => {

	
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

		let dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Week');
        dataTable.addColumn('number', 'Value');
        // A column for custom tooltip content
        dataTable.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
        dataTable.addRows([
			['Week1',10, createCustomHTMLContent('media/Research Project.png', 0)],
			['Week2',10, createCustomHTMLContent('media/imgfinal2.png', 1)],
			['Week3',10, createCustomHTMLContent('media/imgfinal2.png', 2)],
			['Week4',10, createCustomHTMLContent('media/imgfinal2.png', 3)],
			['Week5',10, createCustomHTMLContent('media/imgfinal3.png', 4)],
			['Week6',10, createCustomHTMLContent('media/imgfinal3.png', 5)],
			['Week7',10, createCustomHTMLContent('media/imgfinal3.png', 6)],
			['Week8',10, createCustomHTMLContent('media/imgfinal3.png', 7)],
			['Week9',10, createCustomHTMLContent('media/imgfinal1.png', 8)],
			['Week10',10, createCustomHTMLContent('media/imgfinal1.png', 9)],
			['Week11',10, createCustomHTMLContent('media/imgfinal1.png', 10)],
			['Week12',10, createCustomHTMLContent('media/Research Project.png', 11)],
        ]);

	function createCustomHTMLContent(img, index) {
		let week = weeks.at(index);
		let col = week.color;
		if(week.display)
			return '<div style="background-color:'+col+';padding:5px 5px 5px 5px; max-width: 125px">' +
				'<h6 style="text-align:center">'+ 'Week' + week.num +'</h6>' +
				'<img src="' + img + '" style="width:115px;height:70px"><br/>' +
				'<h6 style="text-align:center">'+ week.description +'</h6>' +
				'</div>'
		else
			return '<div style="background-color:'+col+';padding:5px 5px 5px 5px; max-width: 125px">' +
			'<h6 style="text-align:center">'+ 'Week' + week.num +'</h6>' +
			'<img src="' + img + '" style="width:115px;height:70px"><br/>' +
			'<h6 style="text-align:center">'+ "Wait until this week for the description" +'</h6>' +
			'</div>'
	  }
	var options = {
	tooltip: {isHtml: true, trigger: 'selection'},
	titleTextStyle:{color: 'white', bold: 'true', fontSize: '22'},
	pieSliceText: 'label',
	'width': '100%',
	'height':'auto',
	legend: 'none',
	is3D: true,
	backgroundColor: 'transparent',
	slices: {
		0: {color: weeks.at(0).display ? weeks.at(0).color : weeks.at(0).grey, offset: numOfWeek == 1 ? 0.3 : 0.0},
		1: {color: weeks.at(1).display ? weeks.at(1).color : weeks.at(1).grey, offset: numOfWeek == 2 ? 0.3 : 0.0},
		2: {color: weeks.at(2).display ? weeks.at(2).color : weeks.at(2).grey, offset: numOfWeek == 3 ? 0.3 : 0.0},
		3: {color: weeks.at(3).display ? weeks.at(3).color : weeks.at(3).grey, offset: numOfWeek == 4 ? 0.3 : 0.0},
		4: {color: weeks.at(4).display ? weeks.at(4).color : weeks.at(4).grey, offset: numOfWeek == 5 ? 0.3 : 0.0},
		5: {color: weeks.at(5).display ? weeks.at(5).color : weeks.at(5).grey, offset: numOfWeek == 6 ? 0.3 : 0.0},
		6: {color: weeks.at(6).display ? weeks.at(6).color : weeks.at(6).grey, offset: numOfWeek == 7 ? 0.3 : 0.0},
		7: {color: weeks.at(7).display ? weeks.at(7).color : weeks.at(7).grey, offset: numOfWeek == 8 ? 0.3 : 0.0},
		8: {color: weeks.at(8).display ? weeks.at(8).color : weeks.at(8).grey, offset: numOfWeek == 9 ? 0.3 : 0.0},
		9: {color: weeks.at(9).display ? weeks.at(9).color : weeks.at(9).grey, offset: numOfWeek == 10 ? 0.3 : 0.0},
		10: {color: weeks.at(10).display ? weeks.at(10).color : weeks.at(10).grey, offset: numOfWeek == 11 ? 0.3 : 0.0},
		11: {color: weeks.at(11).display ? weeks.at(11).color : weeks.at(11).grey, offset: numOfWeek == 12 ? 0.3 : 0.0},
	}
	};

	var chart = new google.visualization.PieChart(document.getElementById('myChart'));
	chart.draw(dataTable, options);
	}

	return (
		<div id="myChart" style={{height: "80vh", width: "100%"}}></div>
	)
}