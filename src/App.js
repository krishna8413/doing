import "./App.css";
import PlayButton from './components1/PlayButton';
import Video from "./components1/Video";
import videos from "./data/data";
function App() {

  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>
      {
        videos.map((video)=>(<Video
          key={videos.id}
          title={videos.title}
          views={videos.views}
          time={videos.time}
          channel={videos.channel}
          verified={videos.verified}
          id={videos.id}
          >
            <PlayButton
            onPlay={()=> console.log('Playing..',videos.title)}
            onPause={()=>console.log('Paused...',videos.title)}
            >
              {videos.title}
            </PlayButton>
          </Video>
          ))}

          <div style={{clear:"both"}}>
            {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      
          </div>

    </div>
  );
}

export default App;
