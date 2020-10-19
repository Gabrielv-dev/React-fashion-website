import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Verifica Colectia Noua!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src="images/1.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='BLUZE - 80 RON'
                        path='/services'
                        />
                        <Carditem 
                        src="images/2.jpg"
                        text="Travel through the Islands of Bali in a Privat Cruise"
                        label='MASSIMO DUTTI'
                        path='/services'
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                       src='images/3.jpg'
                       text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                       label='SACOU - 150 RON'
                       path='/services'
                        />
                        <Carditem 
                        src='images/4.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='ZARA'
                        path='/products'
                        />
                        <Carditem 
                      src='images/5.jpg'
                      text='Ride through the Sahara Desert on a guided camel tour'
                      label='MANGO'
                      path='/sign-up'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                        src="images/7.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='BLUGI - 100 RON'
                        path='/services'
                        />
                        <Carditem 
                        src="images/6.png"
                        text="Travel through the Islands of Bali in a Privat Cruise"
                        label='BRAND'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                       src='images/1ult.png'
                       text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                       label='SACOU - 150 RON'
                       path='/services'
                        />
                        <Carditem 
                        src='images/2ult.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='ROCHII - 110 RON'
                        path='/products'
                        />
                        <Carditem 
                      src='images/3ult.jpg'
                      text='Ride through the Sahara Desert on a guided camel tour'
                      label='FASHION TRENDS'
                      path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
