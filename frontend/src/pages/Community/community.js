import React, { Component } from 'react'
import './community.css'

export class Community extends Component {
  render() {
    return (
      <>
      <body>
        <header>
        <a href="/accaunt-settings" className='text'><img src='./img/UserPhotoS.png' alt='' className='profile-settings'/></a>
        <a href="/settings" className='text'><img src='./img/Menu.png' alt='' className='settings'/></a>
      </header>

      <div className='bg-commu'>
        <div className='cont-commu'>
            <div className='fstr1'>Make new <br/>friends</div>
            <div className='fstr2'>By adding a new friends to your list, you 
            <br/>can view their activity during the day</div>
        </div>
      </div>

      <div className='bg-search'>
        <div className='cont-search'>
            <input className='inp-search' type="text"  placeholder="Enter username"/>
            <img src='./img/search.png' alt='' className='search12'/>
            <div className='box-of-icon'></div>
        </div>
      </div>

      <div className='bg-friends'>
        <div className='cont-friends'>
          <div className='list'>Your list of friends:</div>
          <p>Friend 1</p>
          <div className='bgoflist'>
            <img src='./img/User35x35.png' alt='' className='usr1'/>
            <div className='contoflist'><div className='tupo'>(Username) average emissions <br/> are reduced by <span>36%</span></div> </div>
          </div>
          <p>Friend 2</p>
          <div className='bgoflist'>
            <img src='./img/User35x35.png' alt='' className='usr1'/>
            <div className='contoflist'><div className='tupo'>(Username) average emissions <br/> are reduced by <span>36%</span></div> </div>
          </div>
          <p>Friend 3</p>
          <div className='bgoflist'>
            <img src='./img/User35x35.png' alt='' className='usr1'/>
            <div className='contoflist'><div className='tupo'>(Username) have not been <br/> active this day</div> </div>
          </div>
        </div>
      </div>

      
      <footer>
        <div className='footer77'>
            <a href="/home" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
        </div>
      </footer>
      </body>
      </>
    )
  }
}

export default Community