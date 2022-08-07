import './App.css';
import NameList from './ListRendring/NameList';

// import Helloworld from './componants/Helloworld'
// import Displaytext from './componants/Displaytext'
// import Classcomponant1 from './componants/Classcomponant1'
// import Hellojsx from './componants/Hellojsx'
// import Withoutjsx from './componants/Withoutjsx'
// import Statedemo from './componants/Statedemo'
// import Counter from './componants/EventHandling/Counter'
// import FunctionClick from './componants/FunctionClick'
// import HookCounter from './componants/HooksDemo/HookCounter'
//import HooksCounterTwo from './componants/HooksDemo/HooksCounterTwo'
//import HooksThree from './componants/HooksDemo/HooksThree'
//import HooksFour from './componants/HooksDemo/HooksFour'
// import ParentComponent from './componants/MethodsAsProps/ParentComponent';
// import UserGreeting from './componants/ConditionalRendring/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <Helloworld name="Ritwik" surname="Deshmukh">
        <p>Web Developer</p>
      </Helloworld>
      <Helloworld name="John" surname="Doe">
      <p>Java Developer</p>
      </Helloworld>
      <Helloworld name="Jane" surname="Walker">
      <p>.NET Developer</p>
      </Helloworld>
      <Displaytext/>
      <Classcomponant1/>
      <Hellojsx/>
      <Withoutjsx/>
      <Statedemo/>
      <FunctionClick/>
      <Counter/>
      <HookCounter/>
      <HooksCounterTwo/>
      <HooksThree/> 
      <HooksFour/>
      <ParentComponent/>
      <UserGreeting/>*/}
      <NameList/>
    </div>
  );
}

export default App;
