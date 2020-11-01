import './App.css';
// import ShoppingList from './components/shopping-list/shopping-list'
// import CustomerList from './components/customer-list/customer-list'
import FormDemo from './components/form-demo/form-demo'

// let name = 'name'
// const shoppingList = [
//   {id: 1, name: '小马炸鸡'},
//   {id: 2, name: '隔壁老王卤肉饭'},
//   {id: 3, name: '小张冷饮'}
// ]
function App() {
  return (
    <div className="App">
      {/* <ShoppingList shoppingList={shoppingList} /> */}
      {/* <CustomerList name={name} />  */}
      {/* <button onClick={changeName}>add</button> */}
      <FormDemo />
    </div>
  );
}

// function changeName(e) {
//   console.log(e)
//   name = name + '1'
// }
export default App;
