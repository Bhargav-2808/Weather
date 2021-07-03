import React, { useEffect, useState } from "react";
import './TempApp.css';


const TempApp = () =>{

    const [city , setcity] = useState(null);
    const [ser , setser] = useState("Mumbai");
    

    useEffect( ()=>{
        const fetchApi = async() =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ser}&units=metric&appid=1896819d6f057394d332cfc3b3ca36cb`;
            const res = await fetch(url);

            const res_= await res.json();
            setcity(res_.main);

        }
        fetchApi();
    } ,[ser])
    return(


        <>
         
            <div className="box_">
                <div className="inputData">

                    <input 
                     type="search"
                     className="inputfield" 
                     placeholder="Type here"  
                     value={ser}
                     onChange={ (event) =>{

                        setser(event.target.value);

                     }}
                    />



                </div>

            {
                !city ? (
                    <p> No Data found</p>
                ) : (
                    <>
                        <div className="info">
                            <h2 className="location"><i className="fa fa-thermometer-empty" aria-hidden="true"></i>{ser}</h2>
                            <h1 className="temp">{city.temp}°C</h1>
                            <h3 className="tempmin_max">Min : {city.temp_min} °C|| Max : {city.temp_max} °C</h3>

              
                        </div>

                    </>
                )
            }    

        
                
         
             
            </div>
        </>
    )
}

export default TempApp ;