// import { Header } from "./Components/Header";
import { Student } from './Components/Student';
import './app.css';
// import { Learncomponents } from "./Components/Learncomponents"
function app(){
  return(
  <>
    {/* <div> This is a computer </div>
    <Learncomponents/> */}
    {/* <Header/> */}

    <Student name="santhosh" age={21}isMarried={false}/>
    <Student name="seenu" age={25}isMarried={false}/>
    <Student name="sam" age={27}isMarried={true}/>
    </>
  );
}

export default app;