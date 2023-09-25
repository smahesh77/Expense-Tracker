import {React,useContext,useEffect,useState} from 'react'
import { Pie,Doughnut } from 'react-chartjs-2';
import AuthContext from '../contexts/authContext';
import apiClient from "../services/api-client";
import { Container, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import Chart from 'chart.js/auto';
function Pichartt() {
    const [chartData, setChartData] = useState({});
    const {User} = useContext(AuthContext)
    const [dataLoaded, setDataLoaded] = useState(false);
  
    useEffect(() => {
      // Simulate fetching data with a setTimeout (replace this with your data fetching logic)
      const data = {id:User.id}
      apiClient.post("/user/getusercats", data).then((res) => {
        
        console.log(res.data);
        setTimeout(() => {
            const piedata = {
              labels: ['Entertaintment', 'Rent', 'Health','Food','Electricity'],
              datasets: [
                {
                  data: [res.data.Entertainment,res.data.Rent,res.data.Health,res.data.Food,res.data.Electricity], // Replace with your actual data
                  backgroundColor: ['red', 'blue', 'green','pink','yellow'], // Colors for segments
                },
              ],
            };
            setChartData(piedata);
            setDataLoaded(true);
          }, 1000); 
      }).catch((err) => {
        console.log(err);
      });
      // Simulate a 2-second delay
    }, []);
  
    return (
  <div>
   
        {dataLoaded ? (
          <Doughnut 
           data={chartData}
           padding='30%'
           options={{
            plugins: {
              legend: {
                display: true,
                // Hide legend
              },
            },
         
           // Aspect ratio controls the width and height ratio of the chart (1 is square)
           
            cutout: '60%',
            radius:'46%' // Adjust to resize the hole in the middle
          }} />
        ) : (
          <p>Loading data...</p>
        )}
    </div>
    );
}

export default Pichartt