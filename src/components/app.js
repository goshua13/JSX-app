import React, { Component } from 'react';

export default class App extends Component {
bruh= () =>{
return 'hey'
}
  render() {
    const title = 'Joshua Aragon'
    return (
      <div className='container'>
        <div style={{textAlign:'right', margin:'10px'}}>
          <button>
              Home
          </button>
          <button>
            Contact
          </button>
          <input placeholder='search...'/>
        </div>
        <div style={{marginTop: '20vw', textAlign:'center'}}>
          <h1>{title}</h1>     
          <h2>He is the dopest developer and will grind everyday</h2>
          <hr />
          <p>So this is just a portfolio of <b>Joshua</b> and how he is really <i>cool</i> at what 
            he does and<br/> he just doesnt put up with anyones <mark>crap</mark>
            and he just really wants to keep coding and creating content that people
            enjoy so that they can be happy and stuff!</p>
            <img src='assets/tech.jpg'/>
        </div>
       <div className='lists'>
      {console.log(this.bruh)}
       <ol>
          <li>
            Ski
          </li>
          <li>
            Snowboard
          </li>
          <li>
            Gear
          </li>
        </ol>
        
        <ul>
          <li>
           USA 
          </li>
          <li>
            utah
          </li>
          <li>
            Sundance
          </li>
        </ul>
       </div>
      </div>
    );
  }
}
