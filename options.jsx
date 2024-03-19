import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
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
import './src/index.css'


function Options(){

const navigate=useNavigate();

const getCompany= (companyName) => {
    navigate(`/company/${companyName}`);
};

return(

    <div>
       <hr />
       <p onClick={() => getCompany("TSLA")} ><button>Tesla</button></p> <img className='pic' src={tesla} alt="" />
       <hr />
       <p onClick={() => getCompany("AAPL")}><button>Apple</button></p><img className='pic' src={apple} alt="" />
       <hr />
       <p onClick={() => getCompany("META")}><button>Meta</button></p><img className='pic' src={meta} alt="" />
       <hr />
       <p onClick={() => getCompany("AMZN")}><button>Amazon</button></p><img className='pic' src={amazon} alt="" />
       <hr />
       <p onClick={() => getCompany("GOOG")}><button>Google</button></p><img className='pic' src={google} alt="" />
       <hr />
       <p onClick={() => getCompany("NVDA")}><button>Nvidia</button></p><img className='pic' src={nvidia} alt="" />
       <hr />
       <p onClick={() => getCompany("IBM")}><button>IBM</button></p><img className='pic' src={ibm} alt="" />
       <hr />
       <p onClick={() => getCompany("NFLX")}><button>Netflix</button></p><img className='pic' src={netflix} alt="" />
       <hr />
       <p onClick={() => getCompany("V")}><button>Visa</button></p><img className='pic' src={visa} alt="" />
       <hr />
       <p onClick={() => getCompany("MA")}><button>Mastercard</button></p><img className='pic' src={mastercard} alt="" />
       <hr />
       <p onClick={() => getCompany("DIS")}><button>The Walt Disney Company</button></p><img className='pic' src={disney} alt="" />
       <hr />
       <p onClick={() => getCompany("JNJ")}><button>Johnson & Johnson</button></p><img className='pic' src={johnson} alt="" />
       <hr />
       <p onClick={() => getCompany("PYPL")}><button>PayPal</button></p><img className='pic' src={paypal} alt="" />
       <hr />
       <p onClick={() => getCompany("KO")}><button>Coca Cola</button></p><img className='pic' src={coke} alt="" />
       <hr />
       <p onClick={() => getCompany("SBUX")}><button>Starbucks</button></p><img className='pic' src={starbucks} alt="" />






    </div>



)

}

export default Options;