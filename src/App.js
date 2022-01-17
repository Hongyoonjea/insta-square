import logo from './logo.svg';
import './App.css';

function App() {

  return (
   <body id="insta">
     <div className="border">
      <div className='fixed-top'>
        <div className="top">
          <div className="top__column">
            <span className="top__column-text">2:22</span>
            <i className="fas fa-location-arrow fa-xs"></i>
          </div>
          <div className="top__column">
            <i className="fas fa-signal fa-xs"></i>
            <i className="fas fa-wifi fa-xs"></i>
            <i className="fas fa-battery-three-quarters fa-xs"></i>
          </div>
        </div>

        {/* top */}

        <form className="reply">
              <div className="reply__column">
              <div className="reply-search">
                <i className="fas fa-search fa-sm"></i>
              </div>
              <input type="text" placeholder="    검색" />
              </div>
              <i className="fas fa-map-marked-alt fa-lg"></i>
        </form>
      </div>

        {/* header */}

      <body className="float-container">
        <div className="float-container-two" >
          <img src="sdds.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        <div className="float-container-two" >
          <img src="sdsd.jpg" />
          <i className="fas fa-comments"></i>
        </div>
         
        <div className="float-container-two" >
          <img src="theback.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        
        <div className="float-container-two" >
          <img src="gogume.jpg" />
          <i className="fas fa-comments"></i>
        </div>

        <div className="float-container-two" >
          <img src="gumeface.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        <div className="float-video float-container-two">
          <video autoPlay="autoplay" muted="muted" >
            <source src="gumes.mp4" type="video/mp4" />
          </video>
          <i className="far fa-caret-square-right fa-lg"></i>
        </div>
        <div className="float-container-two" >
          <img src="gumess.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        <div className="float-container-two" >
          <img src="gumetongue.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        <div className="float-container-two" >
          <img src="gumetwo.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        <div className="float-container-two" >
          <img src="gumewow.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        <div className="float-container-two" >
          <img src="sd.jpg" />
          <i className="fas fa-comments"></i>
        </div>
        <div className="float-container-two" >
          <img src="sdds.jpg" />
          <i className="fas fa-comments"></i>
        </div>
      </body>

      <div className="under">
        <div className="under__column">
          <i className="fas fa-home fa-lg"></i>
          <i className="fas fa-search fa-lg"></i>
          <i className="far fa-caret-square-right fa-lg"></i>
          <i className="fas fa-shopping-bag fa-lg"></i>
          <img src="sd.jpg"  className="under__column-avatar" />
          
        </div>
      </div>
     </div>
   </body>
  );
}

export default App;
