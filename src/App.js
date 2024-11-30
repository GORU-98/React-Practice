import React ,{} from 'react';
import './App.css';
// import InputCusHook from './components/InputCusHook';
import Item1 from './components/Item1';
// import UseRef from './components/UseRef';
// import CounterCustomeHook from './components/CounterCustomeHook';
// import UseContext from './components/UseContext';
// import CountB from './components/CountB';
// import CountA from './components/CountA';
// import ApiReducer from './components/ApiReducer';
// import CounterReducerTwo from './components/CounterReducerTwo';
// import UEApi from './components/UEApi';
// import UECleanup from './components/UECleanup';
// import UEMouse from './components/UEMouse';
// import Random from './components/Random';
// import UseEffect from './components/UseEffect';
// import UseStateArr from './components/UseStateArr';
// import AxiosGet from './components/AxiosGet';
// import Comp1 from './components/Comp1';
// import Hover2 from './components/Hover2';
// import ClickCounter from './components/ClickCounter';
// import Count  from './components/Count';
// import Parent  from './components/Parent';
// import List  from './components/List';
// import Form  from './components/Form';
// import ParentComp  from './components/ParentComp';
// import RefComp  from './components/RefComp';
// import ParentRef  from './components/ParentRef';
// import ForwardRef  from './components/ForwardRef';
// import Portal  from './components/Portal';
// import HoverCounter  from './components/HoverCounter';
// import RenderProps from './components/RenderProps';
// import {Provider} from './components/UserContext'
// export const userContext=React.createContext()
// let initialValue=0;
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment' :
//         return state + 1
//         case 'decrement' :
//         return state - 1 
//         case 'reset' :
//         return initialValue
//         default :
//        return state
//     }
// }
function App() {
   // const [state,dispatch] = useReducer(reducer,initialValue);
  return (
   <div className='main'>
   {/* <Count name="Gourav Panchal"/>
   <Parent/> */}
   {/* <List/> */}
   {/* <Form/> */}
   {/* <ParentComp/> */}
   {/* <RefComp/> */}
   {/* <ParentRef/> */}
   {/* <ForwardRef/> */}
   {/* <Portal/> */}
   {/* <HoverCounter name="Gourav"/>
   <ClickCounter/> */}
   {/* <RenderProps  render={(count,increment)=> <Hover2 count={count} increment={increment}/>}/>  */}
{/* <Provider value="Panchal">
   <Comp1/>
</Provider> */}
{/* <AxiosGet/> */}
{/* <UseStateArr/> */}
{/* <Random/> */}
{/* <UseEffect/> */}
{/* <UECleanup/> */}
{/* <UEApi/> */}
{/* <userContext.Provider value={"Gourav Panchal"}>
   <UseContext/>
</userContext.Provider> */}
{/* <CounterReducerTwo/> */}
{/* <h1>{state}</h1>
<userContext.Provider value={{state,dispatch}}>
<CountA/>
<CountB/>
</userContext.Provider> */}

{/* <ApiReducer/> */}
{/* <UseRef/> */}
{/* <CounterCustomeHook/> */}
{/* <InputCusHook/> */}
<Item1/>
   </div>
  );
}

export default App;
