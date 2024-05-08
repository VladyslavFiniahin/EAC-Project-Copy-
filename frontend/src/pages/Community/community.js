import React, { Component } from 'react';
import './community.css';

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userData: null,
    };
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username } = this.state;
    try {
      const response = await fetch(`/api/users?username=${username}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      this.setState({ userData });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
  const { userData } = this.state;
    return (
      <>
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
              <form onSubmit={this.handleSubmit}>
                <input className='inp-search' type="text" placeholder="Enter username" onChange={this.handleChange} />
                <button type="submit" className='btac'><img src='./img/search.png' alt='' className='search12'/></button>
              </form>
          </div>
        </div>

        <div className='bg-friends'>
          <div className='cont-friends'>
            <div className='list'>Your list of friends:</div>
            {userData && userData.map(user => (
              <div key={user.username}>
                <div className='bgoflist'>
                  <img src='./img/User35x35.png' alt='' className='usr1'/>
                  <div className='contoflist'><div className='tupo'>{user.username} average emissions <br/> are reduced by <span>36%</span></div> </div>
                </div>
              </div>
            ))}
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
      </>
    );
 }
}

export default Community;
