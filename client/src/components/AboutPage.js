import React from 'react';

export default class AboutContent extends React.Component {
    render(){
        return(
            <div className="container containerText">
                <section>
                    <h1>About</h1>
                    <div className="img-container">
                        <img className="map-img" src="./img/simple_map.png" alt="world map with red dots"/>
                    </div>
                    <p>Disaster Live is a web application designed by University of Washington students to inform 
                        users of world disasters. We created this project as a source of information for users who currently reside 
                        in disaster-struck areas or for those travellers planning ahead.</p>
                    <p>The Disaster Live webpage contains information on ongoing worldwide disaster, disaster-related news, 
                        and global disaster relief organizations. Users may find relevant and current information by using the drop-down menus 
                        on the main landing page.</p>
                    <div className="img-container">
                        <img className="donation-webpage" src="./img/donationpage.png" alt="donation webpage"/>
                    </div>
                    <p>For those who wish to support the organizations listed, the user simply needs to click the "donate" menu from the landing page. 
                        From there, the UI will guide them as they select which organization they wish to support. With the simplicity and user-friendly interface of Disaster Live,
                         users have an all-in-one solution for researching and supporting their favorite organizations.</p>
                    {/* need to edit later */}
                    <h1>About Team</h1>
                    <p>Eric Kim, Jisu Kim, Sharon Lin, and Xi Yan</p>
                </section>
            </div>
        )
    }
}