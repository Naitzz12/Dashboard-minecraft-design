import "../App.css";
import img1 from "../assets/minecraft-grass-block.png";

function Button({ buttonBar }) {
  return (
    <>
      <div className="logo">
        <img src={img1} alt="Minecraft Dash" />
        <div className="bar">
          <input type="checkbox" onClick={buttonBar} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Button;
