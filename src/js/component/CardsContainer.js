import React from 'react'
import Card from './Card'

const CardsContainer = () => {
  return (
    <div className='row mb-5 justify-content-center'>
        <div className='col-12 col-md-6 col-lg-3 mb-3 text-center'>
            <Card title='Card Title' btntext='Find Out More!' imgHTML='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-3 text-center'>
            <Card title='Card Title' btntext="Find Out More!" imgHTML='https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-3 text-center'>
            <Card title='Card Title' btntext="Find Out More!" imgHTML='https://images.unsplash.com/photo-1524666643752-b381eb00effb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-3 text-center'>
            <Card title="Card Title" btntext="Find Out More!" imgHTML='https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
    </div>
  )
}

export default CardsContainer