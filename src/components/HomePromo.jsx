import "../styles/HomePromo.css";
import heartImage from '../assets/images/heart-image.png';
import happyDoctor from '../assets/images/happyDoctor.jpg';

function HomePromo () {
    return (
        <>
            <div className="promo-container">
                <div className="promo-text">
                    <h1>Connecting You to <br /> Expert Care in Just a <br /> Few Clicks!</h1>
                    <p>Get personalised care with just a tap. <br />
                    Trusted professionals at your fingertips. <br />
                    Your path to better health starts here</p>
                    <button className="promo-button">
                        Book Appointment
                    </button>
                </div>
                <div className="promo-image">
                    <img 
                        src={heartImage} 
                        alt="heart-image" 
                    />
                </div>
            </div>
            
            <div className="health-detail">
                <div className="doctor-image">
                    <img
                        src={happyDoctor}
                        alt="happyDoctor"
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
                <div className="text-section">
                    <div className="header">
                        <h1>Welcome to our Healthcare Platform</h1>
                        <p>Connect with certified professionals instantly</p>
                    </div>
                    <div className="features">
                        <h2>Our Services</h2>
                        <ul className="features-list">
                            <li>Instant access to certified professionals</li>
                            <li>Book appointments, chat and video call without the hassle</li>
                            <li>Secure, private, and always available when you need it.</li>
                            <li>Your path to better health starts here</li>
                        </ul> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePromo