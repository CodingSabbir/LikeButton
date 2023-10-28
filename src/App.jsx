
import { useState } from 'react';
import './App.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function App() {
  const [like,setLike]=useState('')
  const handlLikeBtn=()=>{
    let color= like === 'primary' ? '' : 'primary';
    setLike(color)
  }
  return (
    <>
  <ThumbUpIcon onClick={handlLikeBtn}  color={like}/>
  
  
    </>
  )
}

export default App



