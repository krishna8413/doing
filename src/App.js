import "./App.css";
import Video from "./components1/Video";
function App() {
  let obj= {
    title : 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'Krishna',
  };
  return (
    <div className="App">
      <div>Videos</div>
      <Video{...obj}></Video>

      <Video
        title="Node JS tutorial"
        views="100K"
        time="1 month ago"
      ></Video>
      <Video
        title="Mongo db tutorial"
        views="1M"
        time="1 month ago"
        channel="Coder Dost"
      ></Video>
    </div>
  );
}

export default App;
