import './PlayButton.css';
function PlayButton({message,children,onPlay,onPause}){
    let playing=false;
    function handleClick(e){
        console.log(e)
        e.stoppropagation()

        if(playing) onPause()
        else onPlay();

        playing=!playing;
    }

    return(
        <button onClick={handleClick}>{children} :{playing ?'>' :'||'} </button>
    )
}
export default PlayButton;