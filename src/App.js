import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie'
import ListOfMovie from './components/ListOfMovie'
function App() {
  
const [list, setList] = useState([
  {
    id: "1",
    title: "The Conjuring",
    poster: "https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg",
    decription:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    rate: 2,
  },
  {
    id: "2",
    title: "The Grudge",
    poster:
      "https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 3,
  },
  {
    id: "3",
    title: "The Ring",
    poster: "https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 1,
  },
  {
    id: "4",
    title: "The Shawshank Redemption",
    poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 3,
  },
  {
    id: "5",
    title: "The Godfather",
    poster:
      "https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 3,
  },


]);
const AddNewMovie = (film) => {
  setList([...list, film]);
};
  
  return (
    <div className="App" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <ListOfMovie list={list} setList={setList}/>
      <AddMovie style={{textAlign:'center'}} AddNewMovie={AddNewMovie}/>
    </div>
    )
}

export default App;
