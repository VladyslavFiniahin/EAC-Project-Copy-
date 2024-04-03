import React, { Component } from 'react';
import './settings.css';

export class Settings extends Component {
  render() {
    return (
<>
<body>
<header>
<a href="/" className='text'><img src='./img/mingcute_right-line.png' alt='' className='goBack'/></a>
</header>
<div className='userDiscr'>
        <img src='./img/UserPhotoB.png' alt='1' className='userPhoto' />
        <p>Username</p>
      </div>

      <div className='cont-lvl'>
      <div className='bg-lvl'>
        <div className='lvl'>69lvl</div>
      </div>
      <a href="/achievement"><img src='./img/achievement.png' alt='' className='achievement' /> </a>
      </div>
      <div className='bgelem'>
      <div className='contelem'>

    <a href="/notifications" className='text'> <div className='rectangle1'>
        <img src='./img/mi_notification.png' alt='' className='icons'/>
        <div className='textelem'>Notifications</div>
        </div> </a>
        
        <a href="/help" className='text'>   <div className='rectangle2'>
          <img src='./img/Help.png' alt='' className='icons'/>
          <div className='textelem'>Help</div>
        </div> </a>

    <a href="/privacy" className='text'>   <div className='rectangle2'>
          <img src='./img/shield.png' alt='' className='icons'/>
          <div className='textelem'>Privacy</div>
        </div> </a>

        <a href="/privacy" className='text'>   <div className='rectangle2'>
          <img src='./img/Group.png' alt='' className='icons'/>
          <div className='textelem'>Language</div>
        </div> </a>

        <a href="/logout" className='text'>   <div className='rectangle2'>
          <img src='./img/Logout.png' alt='' className='icons'/>
          <div className='textelem'>Log Out</div>
        </div> </a>
</div>
</div>

<footer>
        <div className='foot13'>
            <a href="/" className='text'><img src='./img/Home.png' alt=''/></a>
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

export default Settings