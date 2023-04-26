import React from 'react'
import './ProfileCard.css';
import Cover from '../../Img/cover.jpg';
import Profile from '../../Img/profileImg.jpg';

const ProfileCard = () => {
   
     const ProfilePage = true;

    return (
        <div className='ProfileCard'>

            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>

            <div className="ProfileName">
                <span>Riya Singh</span>
                <span>Sr. Software Engineer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>7,534</span>
                        <span>Followers</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>92</span>
                        <span>Following</span>
                    </div>

                    {ProfilePage && (
                        <>
                        <div className="vl"></div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                        </>
                    )}

                </div>
                <hr />
            </div>

            {ProfilePage ? '' : <span>My Profile</span>}
            
        </div>
    )
}

export default ProfileCard