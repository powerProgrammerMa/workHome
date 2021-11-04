import './App.scss';
import Table from './Table';
import Forword from './Forword';
import LongTouch from './LongTouch/index';
function App() {
  return (
    <div className="App">
     <div className="st">study</div>
      <Table></Table>
      <Forword></Forword>
      <LongTouch></LongTouch>
    </div>
  );
}

export default App;
