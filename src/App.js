import Footer from './Footer';
import Content from './Content';
import Header from './Header';
import { useState } from 'react';


function App() {
  const [items, setItems]= useState(
          [
              { id:1,
              checked: true,
              item: "Practice coding"
              },
              { id:2,
                  checked: false,
                  item: "Go for walking"
              },
              { id:3,
              checked: false,
              item: "Do meditation"
              }
          ]);
     
      const handleCheck=(id) => {
          const listItems= items.map((item) =>
          item.id===id ? {...item,checked:!item.checked} :item)
          setItems(listItems);
          localStorage.setItem("todo-list",JSON.stringify(listItems));
      }
  
      const handleDelete = (id)=> {
          const listItems= items.filter((item) =>
              item.id!==id)
              setItems(listItems);
              localStorage.setItem("todo-list",JSON.stringify(listItems));
      }

  return (
    <div className="App">
      <Header title="To do List"/>
      <Content 
        items ={items}  
        handleCheck ={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
      length = {items.length}
      />
    </div>
  )
} 



  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          HI I'm Aishwarya hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */


export default App;
