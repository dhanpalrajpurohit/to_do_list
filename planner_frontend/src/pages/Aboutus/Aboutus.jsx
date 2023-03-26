import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./Aboutus.css"
import Header from '../../component/header/Header';
import aboutImage from "../../assets/img/aboutpage.jpg";
import {getProfileAPI} from "../../store/services/authentication";


function AboutUs() {
    const dispatch = useDispatch();
    const { isLoading, isError, isSuccess, errorMsg, data } = useSelector((state) => state.user);
    const [user, setUser] = React.useState({ "name": null, "email": null, "profile_picture": null });

    useEffect(()=>{
        if(!data){
          dispatch(getProfileAPI());
          setUser(data.user);
        }
        setUser(data.user);
      }, [])

    return (
        <React.Fragment>
        <Header userdetail={user} />
        <section className='about_us'>
            <div className='text-center heading'>
                <h1>About Us</h1>
            </div>
            <div class="section mx-auto row pt-5">
                <div class="rounded mx-auto d-block col  mx-auto">
                    <img className="rounded mx-auto d-block" src={aboutImage} alt="aboutus" height={400} width={500} />
                </div>
                <div class="text-section col mx-auto ">
                    <div class="text">
                        <h1>Planner</h1>
                        <div>
                            <ul>
                            <li>Increased productivity: A to-do list helps you prioritize and focus on the most important tasks, which can help you get more done in less time.</li>
                            <li>Reduced stress: By organizing your tasks and having a plan, you can reduce stress and anxiety that comes with feeling overwhelmed or unsure of what needs to be done.</li>
                            <li>Improved time management: With a to-do list, you can allocate time to each task, which can help you manage your time more efficiently and prevent procrastination.</li>
                            <li>Better memory: Writing down tasks on a to-do list helps you remember them better, freeing up mental space and reducing the risk of forgetting important things.</li>
                            <li>Enhanced focus: A to-do list helps you stay focused on the task at hand and prevents distractions, improving concentration and productivity.</li>
                            <li>Better organization: A to-do list helps you stay organized and prevents tasks from slipping through the cracks.</li>
                            <li>Improved decision-making: Prioritizing tasks on a to-do list helps you make better decisions about what needs to be done first, based on importance and urgency.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-5'>
             <h6 className='text-center'>Made By Dhanpal</h6>
            </div>
        </section>
        </React.Fragment>
    );
}

export default AboutUs;
