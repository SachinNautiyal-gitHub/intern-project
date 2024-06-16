import React from 'react'
import './Styles/signup.css'
import image from '../images/account.png'

const Signup = ({ onClose, onNavigate }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                <div className="main">
                    <div className="headline">
                        <p>Let's learn, share & inspire each other with our passion for computer engineering. sign up now </p>
                    </div>
                    <div className='signup'>
                        <h1>Create Account</h1>
                        <p> Already have an account? <a href="#" onClick={onNavigate}>Sign up</a></p>
                    </div>
                    <div className="sections">
                        <div className="left-section">
                            <form>
                                <div className="name">
                                        <input type="text"  placeholder='First Name' />
                                        <input type="text" placeholder='Last Name' />
                                    
                                </div>
                                <input type="text" placeholder='Email' />
                                <input type="text" placeholder='Password' />
                                <input type="text" placeholder='Confirm Password' />

                                <button className='create'> Create Account </button>
                                
                            </form>
                              <button className='facebook'> <i className="fa-brands fa-facebook"></i>Sign up with Facebook</button>
                              <button className='google'><i className="fa-brands fa-google"></i>Sign up with Google</button>
                        </div>

                        <div className="right-section">
                          <img src={image} alt="" />
                          <p className='guideline'> By signing up, you agree to our terms and condition, Privacy policy</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup
