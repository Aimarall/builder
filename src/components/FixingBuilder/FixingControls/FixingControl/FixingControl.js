import classes from "./FixingControl.module.css";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";


const FixingControl = ({ type, count }) => {
const dispatch = useDispatch();
const names = {
  amber: " amber",
  silver: "silver",
  gold: "gold",
  rauchtopaz: "rauchtopaz",
  diamond: "diamond",
  ruby: "ruby",
}


  return (
    <div className={classes.FixingControl}>
      <div className={classes.Example}>
        <Button className="order" onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>

<div className={classes.ingredient}>
  {names[type]}
</div>

        <Button className="order" onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
      </div>
    </div>
  );
}

export default FixingControl;





// import classes from "./FixingControl.module.css";
// import Button from "../../../UI/Button/Button";
// import soundRemove from "../../../../audio/plant-sound.mp3";
// import soundAdd from "../../../../audio/plant-sound-plus.mp3";


// const FixingControl = ({ type, addPot, removePot, count }) => {
//   const names = {
//     amber: " amber",
//     silver: "silver",
//     gold: "gold",
//     rauchtopaz: "rauchtopaz",
//     diamond: "diamond",
//     ruby: "ruby",
//   }


//   function removeSound() {
//     let audio = new Audio();
//     audio.preload = 'auto';
//     audio.src = soundRemove;
//     audio.play();
//   }
//   function addSound() {
//     let audio = new Audio();
//     audio.preload = 'auto';

//     audio.src = soundAdd;
//     audio.play();
//   }
//   return (
//     <div className={classes.FixingControl}>
//       <Button
//         className={classes.Button}
//         onClick={() => { addPot(type); addSound() }}>+</Button>
//       {names[type]}
//       <Button
//         className={classes.Button}
//         onClick={() => { removePot(type); removeSound() }} disabled={!count}>-</Button>
//     </div>);
// }


// export default FixingControl;