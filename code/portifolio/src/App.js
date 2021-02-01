import './css/podcast.css'
import AccessField from './lib/Fields.js'
import bg from './img/img_2.jpg'

function App() {
  return (
    <div className="pod">
    <img className="background" src={bg}/>
      <header className="pod-header">
        <h1 className="pod-main-phrase">
          Publish your podcast everywhere
        </h1>
        <div className="pod-description">
          <p>
            Upload your audio to Pod with a single click. We'll the distribute your podcasts to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
          </p>
          <AccessField/>
        </div>
      </header>
      <footer>
        <div className="Footer"></div>
      </footer>
    </div>
  );
}

export default App;
