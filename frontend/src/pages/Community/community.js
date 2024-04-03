import React, { Component } from 'react'
import './community.css'

export class Community extends Component {
  render() {
    return (
      <body>
        <header>
        <a href="/accaunt-settings" className='text'><img src='./img/UserPhotoS.png' alt='' className='profile-settings'/></a>
        <a href="/settings" className='text'><img src='./img/Menu.png' alt='' className='settings'/></a>
      </header>

      <div className="profile">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c47dbd7bdfaf326b2ff276f7e39141b26b2f590a737aa5fbec25de138ae0f0?apiKey=2d7949b51e034cf2aa5c87b52f192149&" alt="Чухан's avatar" className="avatar" />
        <div className="profile-info">
          <h2 className="profile-name">Чухан</h2>
          <div className="profile-divider"></div>
          <div className="profile-emissions">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4d372e612f5af9371a98d956c24b2c3e235fc586ba1e6beb440a2f257326d37?apiKey=2d7949b51e034cf2aa5c87b52f192149&" alt="" className="icon" />
            <p className="profile-emissions-text">
              Чухан's average emissions are reduced by <span className='percents'>36%</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="profile-2">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c47dbd7bdfaf326b2ff276f7e39141b26b2f590a737aa5fbec25de138ae0f0?apiKey=2d7949b51e034cf2aa5c87b52f192149&" alt="Чухан's avatar" className="avatar" />
        <div className="profile-info">
          <h2 className="profile-name">Чуркан</h2>
          <div className="profile-divider"></div>
          <div className="profile-emissions">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4d372e612f5af9371a98d956c24b2c3e235fc586ba1e6beb440a2f257326d37?apiKey=2d7949b51e034cf2aa5c87b52f192149&" alt="" className="icon" />
            <p className="profile-emissions-text">
              Чуркан's average emissions are reduced by <span className='percents'>36%</span>
            </p>
          </div>
        </div>
      </div>

      <div className="profile-3">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c47dbd7bdfaf326b2ff276f7e39141b26b2f590a737aa5fbec25de138ae0f0?apiKey=2d7949b51e034cf2aa5c87b52f192149&" alt="Чухан's avatar" className="avatar" />
        <div className="profile-info">
          <h2 className="profile-name">Chyrka</h2>
          <div className="profile-divider"></div>
          <div className="profile-emissions-3">
            <img src="./img/ic_outline-close.png" alt="" className="icon" />
            <p className="profile-emissions-text">
            Chyrka have not been active this day
            </p>
          </div>
        </div>
      </div>

      
      <footer>
        <div className='footer'>
            <a href="/" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
        </div>
      </footer>
      </body>
    )
  }
}

export default Community