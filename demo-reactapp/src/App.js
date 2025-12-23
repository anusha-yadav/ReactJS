import HeaderSection from './headerSection';
import Content from './content';
import Footer from './footer';
import './index.css'
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items,setItems] = useState([]);
  const [newItem,setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError,setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok){
          throw Error('Did not recieve expected data');
        }
        const listItems = await response.json()
        setItems(listItems);
        setFetchError(null)
      }
      catch(err){
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
        (async () => await fetchItems())();
      },2000)
  }, [])

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist',JSON.stringify(newItems));
  }

  const addItem = async (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newItem = {id, checked: false, item}
    const listItems = [...items,newItem];
    setAndSaveItems(listItems);

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newItem)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result);
  }

  const handleCheck = async (id)=>{
    const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked} : item);
    setAndSaveItems(listItems);
    const item = listItems.filter(item => item.id === id);
    const updateOptions = {
      method : 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked: item[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result)

  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const deleteOptions = {
      method: 'DELETE'
    }; 
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,deleteOptions);

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <HeaderSection title="Groceries"/>
      <AddItem 
          newItem={newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}
      />
      <SearchItem search = {search}
            setSearch = {setSearch}
      ></SearchItem>
      <main>
        {isLoading && <p>Loading Items</p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
            // items = {items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            items = {items}
            setItems = {setItems}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          >
        </Content>}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
