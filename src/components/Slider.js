import React from "react"
// import BtnSlider from "./BtnSlider"


export function Slider(){
    const [slideIndex, setSlideIndex] = React.useState(1);

    function prev(){
        setSlideIndex(prevState => prevState == 1? 5: prevState - 1)
    }
    
    function next(){
        setSlideIndex(prevState => prevState == 5? 1: prevState + 1)
        
    }

    function moveDot(index){
        setSlideIndex(index);
    }

    return(
        <div className="container--slider">
            <img className="direction left" onClick={prev} src="/images/left-icon.png" />
            <img className="slide" src={`/images/img${slideIndex}.jpg`} />
            <img className="direction right" onClick={next} src="/images/right-icon.png" />

            <div className="container--dots">
                {Array.from({length: 5}).map((ele, index) => (
                    <div
                    onClick={()=> moveDot(index+1)} 
                    className={slideIndex == index+1? "dot active": "dot"}>
                    </div>
                ))}
            </div>
        </div>
    )
}