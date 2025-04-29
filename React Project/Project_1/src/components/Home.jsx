import React from 'react';
const Home = () =>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quasi veniam odio nobis quisquam harum aliquid voluptates similique inventore vitae explicabo adipisci tempora rerum at eius placeat, consectetur ducimus mollitia.</p1>
            
            <div className="hero-btn">
             <button className="btn">Shop Now</button>
             <button className="secondry-btn">Category</button>
            </div>

              <div className='shopping'>
                <p>Also available on..</p>
                <div className='brand-icons'>
                    <img src='/Images/amazon.png' alt='amazon-logo' />
                    <img src='/Images/flipkart.png' alt='flipkart-logo'/>
                </div>
              </div>


            </div>
            <div className="hero-image">
                <img src='/Images/shoe.png' alt='Shoe-logo'/>
            </div>
        </main>
    )
}
export default Home;