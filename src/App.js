import React,{useState} from 'react';
import logo from './images/logo.svg'
import './App.css';
import articles from './data';

import web from './images/1.jpg'
import Ai from './images/4.jpg'
import Dc from './images/3.png'
import fan from './images/2.jpeg'
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);



    const navigateToLogin = ()=>{
       setShowSignup(false);
       setShowLogin(true);
    }


    const navigateToSignup = ()=>{
      setShowLogin(false);
      setShowSignup(true);
    }

    const handleOnClick = ()=>{
      setShowSignup(true);
    }

  return (
    <div className="App">
     
     { showLogin && <Login onClose={()=>setShowLogin(false)}  onNavigate = {navigateToSignup} />}
     {showSignup && <Signup onClose={()=>setShowSignup(false)} onNavigate={navigateToLogin} />} 
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="" />
        </div>
        <div className="header-center">
        <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for your favorite groups in ATG" />
        </div>
        <div className="header-right">
        Create account.<a href="#" onClick={handleOnClick}> It's free!</a>
        </div>
      </header>
      <section className="hero">
        <div className="hero-text">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </section>
      <nav className="post-nav">
        <ul>
          <li style={{color:'black'}}>All Posts(32)</li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        <div className="post-actions">
          <button>Write a Post <i class="fa-solid fa-sort-down"></i></button>
          <button><i class="fa-solid fa-people-group"></i>  Join Group</button>
        </div>
      </nav>
      
      <div className='container'>
      <section className="posts">
        {articles.map((article, index) => (
          <div className="post" key={index}>
            <div className="post-image">
              {/* Place the image URL here */}
              <img src={article.imageUrl} alt="Post" />
            </div>
            <div className="post-content">
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <p className="post-author">{article.author}</p>
              <p className="post-views">{article.views}</p>
            </div>
          </div>
        ))}
      </section>
       
       <div className="group-list">
         
         <div className="inputcon">
         <i class="fa-solid fa-location-dot"></i>
        <input className='input' type='text' placeholder='Noida, India'></input>
        <i class="fa-solid fa-pencil pencil"></i>
         </div>
        <p className='info'><i className="fa-solid fa-exclamation"></i> Your location will help us serve better and extend a personalised experience.</p>

        <p><i className="fa-solid fa-thumbs-up"></i> recommended groups</p>

        <p className='group'><img src={web} alt="" /> web dev Era  <button>follow</button> </p>
        <p className='group'><img src={Ai} alt="" /> AI Hub  <button>follow</button> </p>
        <p className='group'><img src={Dc} alt="" /> DevOps & Clound   <button>follow</button> </p>
        <p className='group'><img src={fan} alt="" /> Fantasy   <button>follow</button> </p>

         

       </div>
      </div>

     
    </div>
  );
}

export default App;
