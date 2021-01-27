import React from 'react'

import InputSearch from './../elements/inputSearch.js';

const UserHeader = ({user}) =>{
    return(
        <div className="user-header">

            <InputSearch/>
             
            <div className="profile">
                <span><b>{!user || user.isLoggedIn === false ? 'Please Login or Signup' : `${user.userAccount.firstName} ${user.userAccount.lastName}`}</b></span>
                <img alt="profile" src={user && user.userAccount.photoUrl? user.userAccount.photoUrl: '/icon/svg/generic_user.svg'}></img>
            </div>

            <style jsx>
            {`
                .user-header{
                    display: flex;
                    height: 100%;
                    flex-direction: row;
                }
                .profile{
                    display: flex;
                    height: 2rem;
                    /* width: 100%; */
                    position: absolute;
                    padding: 0 1rem;
                    right: 1rem;
                    margin-top: 1rem;
                    margin-bottom: auto;
                    align-items: center;
                }
                ._3{
                    flex: 0 0 33%
                }
                ._7{
                    flex: 0 0 67%
                }
                img{
                    width: 40px;
                    margin-left: 1rem;
                }
            `}
            </style>    
        </div>
    )
}

export default UserHeader;