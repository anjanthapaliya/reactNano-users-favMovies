import React, { Component } from 'react';

class UserProfile extends Component{
  render(){
 	console.log(this.props);
    
   return (     
     <ul className='user-favorite-movie'>
       {this.props.profileData.map((aProp) => (
     		<li key={aProp.id}>{aProp.name} has favorite movie of {aProp.favoriteMovie}</li>
   		)
      )}
	 </ul>
   );
  }
}

export default UserProfile;