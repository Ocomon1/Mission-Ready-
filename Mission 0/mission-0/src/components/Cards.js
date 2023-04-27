import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
   
        <div className='cards'>
            <h1>Check out these EPIC Genres!</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-1.jpg"
                    text='Explore the deepest to timeless beauty and emotional depth'
                    label='Classic'
                    path='/services'
                    />

                    <CardItem 
                    src="images/img-2.jpg"
                    text='Explore the deepest to timeless beauty and emotional depth'
                    label='Jazz'
                    path='/services'
                    />


                    <CardItem 
                    src="images/img-3.jpg"
                    text='Explore the deepest to timeless beauty and emotional depth'
                    label='Hip-Hop'
                    path='/services'
                    />

                    <CardItem 
                    src="images/img-4.jpg"
                    text='Explore the deepest to timeless beauty and emotional depth'
                    label='Rock & Roll'
                    path='/services'
                    />

                </ul>
          </div>
         </div>
        </div>
       
  )
}

export default Cards;