import video from "../../assets/videos/graphic_design_promo.mp4";
// import "./VideoComponent.css";

export default function VideoComponent(){
  return(
    <div className="container">
      <video src={video} width="1000" height="700" controls="controls"/>     
    </div>
  );
}