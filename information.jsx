import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import pic from './loading.webp'
import tesla from './teslapic.png'
import amazon from './amazonpic.png'
import coke from './cocacolapic.avif'
import disney from './disneypic.webp'
import google from './googlepic.webp'
import ibm from './ibmpic.png'
import johnson from './johnsonpic.jpeg'
import mastercard from './mastercardpic.webp'
import meta from './metapic.png'
import netflix from './netflixpic.jpeg'
import nvidia from './nvidiapic.jpeg'
import paypal from './paypalpic.png'
import starbucks from './starbuckspic.webp'
import visa from './visapic.png'
import apple from './applepic.jpeg'

function Information(){
 
const {companyName}=useParams();
const [companyData, setCompanyData]=useState(null);
const [loading, setLoading]=useState(true);

useEffect(() =>{
    const fetchData = async() =>{

        try{
            const [Overview_Response, Times_Response]=await Promise.all(
               [
                fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyName}&apikey=demo`),
                fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${companyName}&apikey=demo`),
               ] 
            );

            if(!Overview_Response||!Times_Response){
                throw new Error("Can't fetch data");
            }

            const [Overview_Data, Times_Data]=await Promise.all([
                Overview_Response.json(),
                Times_Response.json(),
            ]);

            setCompanyData([Overview_Data, Times_Data]);
            setLoading(false);
        }catch(error){
            console.error("Can't get data", error);
            setLoading(false);
        }

    }
    fetchData();
}, [companyName]

);

const logos={
    TSLA: tesla,
    AMZN: amazon,
    KO: coke,
    DIS: disney,
    GOOG: google,
    IBM: ibm,
    JNJ: johnson,
    MA: mastercard,
    META: meta,
    NFLX: netflix,
    NVDA: nvidia,
    PYPL: paypal,
    SBUX: starbucks,
    V: visa,
    AAPL: apple
};

if(loading){

    return (

    <div className="loading">

    <p>Loading please wait...</p>
    <img src={pic} alt="No pic sorry" />

    </div>

    )
}

if(!companyData){
    console.log("No info");
    return <p>No data available</p>
}


    if(companyData[0].Name&&companyData[1]){
        const times=companyData[1]["Time Series (Daily)"];
        const name=companyData[0].Name||"N/A";
        const symbol=companyData[0].Symbol||"N/A";
        const description=companyData[0].Description||"N/A";
        const asset=companyData[0].AssetType;
        const exchangesector=companyData[0].Exchange;
        const industry=companyData[0].Industry;
        const capitalization=companyData[0].MarketCapitalization;
        console.log(companyData);
    

return(

    <div>
        <br />
        <p>Stock Information on {name} ({symbol}) <img className="info" src={logos[symbol]} alt="" /> </p>
        <p>Company Overview:</p>
        <p>{description}</p>
        <br />
        <p>{name}'s asset type is {asset}</p>
        <br />
        <p>{name}'s exchange sector is {exchangesector}</p>
        <br />
        <p>{name}'s industry is {industry}</p>
        <br />
        <p>{name}'s market capitalization is {capitalization}</p>
        <br />
        <p>Time Series Daily:</p>
        <ul>
            {times&&Object.entries(times).map(([date, values], index, array)=> {
                let change=0;
                if(index>0){
                    const previous=array[index-1][1];
                    const previousclose=parseFloat(previous["4. close"]);
                    const currentclose=parseFloat(values["4. close"]);
                    change=(currentclose-previousclose)/previousclose*100;
                }
            return(
                <li key={date}>
                Date:{date}, Close: {values["4. close"]}, Volume: {values["5. volume"]}, Percent Change: {change.toFixed(2)}%
              </li>
            );
          
    })}
        </ul>
    </div>


)
    }else{

        return(

            <div>
                <p>No information sorry</p>
            </div>


        )

    }



}

export default Information;