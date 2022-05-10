import './App.css';
import Navbar from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import FAQ from './components/FAQ/FAQ';
import Read from './components/Read/Read';
import Topics_miss from './components/Topics_miss/Topics_miss';
import Footer from './components/Footer/Footer';
import hero from './assets/hero_img.png';
import thumbnail from './assets/Video_thumbnail.png'
import playIcon from './assets/play_circle_filled_white_24px.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid d-flex justify-content-center px-3 my-5 my-md-0">
        <img src={hero} alt="what_the_fish" className='img-fluid' />
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center mt-2 flex-column">
        <h2>HOW IT WORKS</h2>
        <h5 className='mt-5 fw-400'>Sea Basket delivers fresh sourced seafood in a few easy clicks</h5>
      </div>
      <Categories />
      <div className="cotainer-fluid my-4 my-md-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className='text-center my-5'>A GLACE AT OUR PROUDCT</h2>
        <div className="container " style={{ position: "relative" }}>
          <img src={thumbnail} alt="" className='img-fluid' />
          <img src={playIcon} alt="" className='img-fluid' style={{
            position: "absolute", top: "42%", left: "0", right: "0", marginLeft: "auto", marginRight: "auto", cursor: "pointer"
          }} onClick={() => alert("It's just an Image")} />
        </div>
      </div>
      <FAQ />
      <Read />
      <Topics_miss />
      <Footer />
    </div>
  );
}

export default App;
