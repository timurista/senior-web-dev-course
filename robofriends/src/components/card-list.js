import React from 'react'
import Card from '../components/card';

const CardList = ({ robots }) => {
  if (true) {
    throw new Error('something went wrong')
  }
  return (
    <div>
      {robots.map(({id, name, username, email}) => (
        <Card 
          key={`${username}-${id}`} 
          id={id} 
          name={name} 
          username={username} 
          email={email} 
        />
      ))}
    </div>
  )
}

export default CardList;