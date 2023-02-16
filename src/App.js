import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import {Footer,SS,Foo} from './footer/footer';
import Component from './component';
import Component1 from './component1'
import ClickFunction  from './ClickFunction';
function App() {
  return(
    <ClickFunction />
  )
  // const name = "ali";
  // if (name == "Adil") {
  //   return <Component />
  // }
  // else {
  //   return <Component1 />
  // }
  // const name = "Adil";
  // let age = 19;
  // let data;
  // if (name == "Adil") {
  //   data = <Component />
  // }
  // else {
  //   data = <Component1 />
  // }
  // return (
  //   <div>
  //     {/* {age >= 18 ? <h1>you can </h1> : <h1>You can not</h1>} */}
  //      { name == "Adil" ? <Component /> : <Component1 /> }
  //   </div>
  // )
//   return (
//     <div className="App">
//    <h1>
//     heloo ali
//    </h1>
//    <Header name={"Nasir"} />
//    <Header name={"balgharioooo"} />
//    <Footer email={"test@gmail.com"}></Footer>
//    <SS contact={"0312456789999"}/> 
//    <Foo city={"Karachiiiii"}></Foo> 
    
//     </div>
//   );
}

export default App;
