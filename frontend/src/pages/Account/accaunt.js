import React, { Component } from 'react';
import './accaunt.css';

export class Accaunt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const username = localStorage.getItem('loggedInUsername');
    this.setState({ username });
  }

  goBack = () => {
    window.history.back();
  };

  render() {
    return (
      <>

      <header>
       <img src='./img/mingcute_right-line.png' alt='' className='goBack' onClick={this.goBack}/>
      </header>

      <div className='userDiscr'>
        <img src='./img/UserPhotoB.png' alt='1' className='userPhoto' />
        <p>{this.state.username}</p>
      </div>

      <div className='cont-lvl'>
      <div className='bg-lvl'>
        <div className='lvl'>69lvl</div>
      </div>
       <a href="/achievement"><img src='./img/achievement.png' alt='' className='achievement' /> </a>
      </div>

      <div className='cont-info'>
      <div className='bg-info'>
      <p>Accaunt settings</p>
      <input type="" placeholder="Name" />
      <input type="" placeholder="Email" />
      <input type="" placeholder="Change Password" />
      <input type="" placeholder="Change profile photo" />
      </div>
      </div>

      <footer>
        <div className='cont-foot'>
            <a href="/home" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
        </div>
      </footer>

        </>
    )
  }
}

export default Accaunt;
