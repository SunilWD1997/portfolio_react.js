import './home.css';
import Navbar from '../components/navbar/Navbar';
import { LinkedIn, Email, GitHub } from '@material-ui/icons';
import { useEffect } from 'react';



const Home = () => {

useEffect(()=>{
const fetchData = async() =>{
const res = await fetch('http://localhost:8000/emp', {method: 'GET'});
const data = await res.json();
console.log(data);
}

fetchData();
}, [])



  return (
   <div className="home">
<Navbar/>
  <div className="main">

    <h2>Hi, I am Sunil Patra</h2>
    <p>A Front-End developer with a passion for learning </p>
    <p>and creating. </p>
    <div className="social_media_links">
      <a href='https://www.linkedin.com/in/sunil-patra1997' target='_blank' rel="noreferrer"><LinkedIn className='social_icon'/></a>
      <a href='mailto:www.npatra412@gmail.com' target='_blank' rel="noreferrer"><Email className='social_icon'/></a>
      <a href='https://www.github.com/SunilWD1997' target='_blank' rel="noreferrer"><GitHub className='social_icon'/></a>
      </div>
      <button>
        <a href="/images/sunilpatra.pdf" download>Download CV</a>
      </button>
  </div>
 
   </div>

  )
}

export default Home;