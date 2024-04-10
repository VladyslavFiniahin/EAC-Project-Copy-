import React, { Component } from 'react';
import './home.css';

export class Home extends Component {
  render() {
    return (
      <>
      <body>

      <header>
        <a href="/accaunt-settings" className='text'><img src='./img/UserPhotoS.png' alt='' className='profile-settings'/></a>
        <a href="/settings" className='text'><img src='./img/Menu.png' alt='' className='settings'/></a>
      </header>

      <div className='circle'>
        <img src='./img/circle.png' alt='1' className='userPhoto' />
      </div>

      <div className='bg-of-elem'>
      <div className='cont-of-elem'>

      <a href="/elecwaste" className='text'> <div className='section'>
         <img src='./img/Battery.png' alt='' className='icons'/>
          <div className='textelem'>Electronic Waste</div>
        </div> </a>

      <a href="/waste-sorting" className='text'> <div className='section'>
          <img src='./img/Wastesorting.png' alt='' className='icons'/>
          <div className='textelem'>Organic Waste</div>
        </div> </a>

      <a href="/bottle-sorting" className='text'>   <div className='section'>
          <img src='./img/Bottle.png' alt='' className='icons'/>
          <div className='textelem'>Plastics</div>
        </div> </a>

      <a href="/waste" className='text'>   <div className='section'>
          <img src='./img/Waste.png' alt='' className='icons'/>
          <div className='textelem'>Solid Waste</div>
        </div> </a>

      <a href="/recycle" className='text'>   <div className='section'>
          <img src='./img/Recycle.png' alt='' className='icons'/>
          <div className='textelem'>Recyclable Waste</div>
        </div> </a>
      </div>
      </div>

      <footer>
        <div className='contfoot'>
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

export default Home