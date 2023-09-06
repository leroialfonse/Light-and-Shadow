import React, { useState } from 'react';
import video from '../assets/bakeryVid.mp4';
// import video from '../user/bakeryVid.H264';


import { Link } from 'react-router-dom';



const VidHome = () => {

    // const [auth, setAuth] = useAuth([]);
    // const user = useAuth();

    const [isActive, setIsActive] = useState(false);


    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <section onClick={handleToggle} className={`showcase ${isActive ? 'active' : ''}`}>
                <header>
                    <h2 className='logo'>Always Fresh</h2>
                    <div className={`toggle ${isActive ? 'active' : ''}`}></div>
                </header>
                {/* */}

                {/*  */}

                <div>
                    <video
                        // src={video}  autoPlay muted loop></video>
                        src={video} width="800" height='400' autoPlay muted loop></video>

                </div>
                <div className='overlay'></div>
                <div className='text'>
                    <h2>Sweetie Pie!</h2>
                    <h3>Welcome to the Kitchen!!</h3>
                    <p>
                        All of your favorite sweet treats, baked fresh every day! Run, don't walk to Sweetie Pie's bakery!

                    </p>
                    <Link to='/Home'>Hungry??</Link>
                </div>


            </section>
            <div className='menu'>

                <ul>


                    <li><Link to='/categories'>All Treats</Link></li>
                    <li><Link to='/Home'>Choose a Snack!</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </div >
        </>











    )
}

export default VidHome;