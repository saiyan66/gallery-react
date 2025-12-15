import { useState } from 'react'
import { rockBandList } from './data'
import Rock from './components/Rock';
import './App.css'


export default function App() {
  const [index, setIndex] = useState(0);

  return (
  <>
    <Rock />
    
  </>
  );
}


































// function Button({ onClick, children }){
//   return(

//   <button onClick={onClick}>{children}</button>
//   );
// }

// function PlayButton({ movieName }) {

//   function HandlePlayClick(){
//     alert('Playing ${movieName}!');
//   }
//   return(
//   <Button onClick= {HandlePlayClick}>Play"{movieName}"</Button>
//   );
// }

// function Upload() {
//   return (
//     <Button onClick = {()=> alert('Uploading')}>
//       Upload Image
//     </Button>
//   );


// }
// function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName = "LoL"/>
//       <Upload/>
//     </div>
 
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Toolbar />
//     </div>
//   );
// }