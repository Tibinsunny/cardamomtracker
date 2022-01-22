import React, { useState,useEffect } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import '../styles/chart.css'
import axios from 'axios';
import { data } from 'jquery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function getMonth(monthStr){
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames.indexOf(monthStr)
}
function MultipleAxisChart() 
{	
	const [dataset, setDataset] = useState([]);
	const [averageData, setaverageData] = useState([]);
	const [maxData , setMaxData] = useState([])
	const dataSetOne = [];
	const dataSetTwo = [];
	useEffect( () => {
	async function getDatas()
	{
		let response = await axios.get("https://indianspices-api.herokuapp.com/cardamom/archieve/all");
		response.data.forEach((details) => {
			let splitter = details.date.split("-")
			let month = Number(getMonth(splitter[1]))
			let year = Number(splitter[2])
			let day = Number(splitter[0])
			let dataModified = {
				x:new Date(year, month, day),
				y:Number(details.Avg_Price),
			}
			dataSetOne.push(dataModified)
			
		})
		response.data.forEach((details) => {
			let splitter = details.date.split("-")
			let month = Number(getMonth(splitter[1]))
			let year = Number(splitter[2])
			let day = Number(splitter[0])
			let dataModified = {
				x:new Date(year, month, day),
				y:Number(details.MaxPrice),
			}
			dataSetTwo.push(dataModified)
			
		})
		setaverageData(dataSetOne)
		setMaxData(dataSetTwo)
	}
	getDatas();
	}, []);
	const options = {
		theme: "dark2",
		animationEnabled: true,
		subtitles: [{
			text: "Made with data from indianspices-api.herokuapp.com"
		}],
		axisX: {
			title: "Months"
		},
		axisY: {
			title: "Price in ₹ ",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Profit in USD",
			titleFontColor: "#51CDA0",
			lineColor: "#51CDA0",
			labelFontColor: "#51CDA0",
			tickColor: "#51CDA0"
		},
		data: [{
			type: "spline",
			name: "Max Price",

			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "₹#,##0.#",
			dataPoints: maxData
		},
		{
			type: "spline",
			name: "Average Price",
		
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "₹#,##0.#",
			 dataPoints: averageData
		}]
	}

	return (
		  <div className="MultipleAxisChart">
			<CanvasJSChart options = {options} />
	{console.log("render")}
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}

export default MultipleAxisChart;