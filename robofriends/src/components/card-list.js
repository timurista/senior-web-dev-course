import React from 'react'
import Card from '../components/card';

const CardList = ({ robots }) => {
  console.log('CardList render')
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