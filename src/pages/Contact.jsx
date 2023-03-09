import './contact.css';
import Navbar from '../components/navbar/Navbar';
import { useState } from 'react';



const Contact = () => {
  const [userInput, setUserInput] = useState({ user_name: '', user_email: '', user_message: '' });
 

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserInput({ ...userInput, [name]: value })

  }
  // submit data function declaration:-
  const dataSubmit = (e) => {
    
    e.preventDefault();
if(!userInput.user_name & !userInput.user_email & !userInput.user_message){
      alert('all fields are required to be filled')
}else{
  alert(`Thank you for your time ${userInput.user_name}`)
  setUserInput({ user_name: '', user_email: '', user_message: '' });
}



}

  return (
    <>

      <Navbar />
      <div className="contact">
        <h3>Contact me</h3>
        <p>Got a question? I'd love to hear from you. Send us a message and</p>
        <p>I'll respond as soon as possible.</p>
        <form action="https://formspree.io/f/xzbqpekz" method='POST' onSubmit={dataSubmit}>
          <div className="input_fields">
            <label htmlFor="">Name</label><br />
            <input type="text" name='user_name' autoComplete='off' value={userInput.user_name} onChange={handleInput} />
          </div>
          <div className="input_fields">
            <label htmlFor="">Email</label><br />
            <input type="email" name='user_email' autoComplete='off' value={userInput.user_email} onChange={handleInput} />
          </div>
          <div className="input_fields">
            <label htmlFor="">Message</label><br />
            <textarea name="user_message" id="" cols="30" rows="5" autoComplete='off' value={userInput.user_message} onChange={handleInput} ></textarea>
          </div>
          <div className="input_fields" style={{ margin: '0' }}>
            <button type='submit'>Send</button>
          </div>

        </form>

      </div>
    </>)
}

export default Contact;