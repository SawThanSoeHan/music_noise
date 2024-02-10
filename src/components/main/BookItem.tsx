import { IonItem } from '@ionic/react'
import React from 'react'
import { Book } from '../../data/books';
import { Link } from 'react-router-dom';
import { WebViewCapacitor } from '../../../webview-capacitor-plugin-main/src';


interface BookItemProp {
  book: Book;
}

const BookItem:React.FC<BookItemProp> = ({ book }) =>  {

  const goGame = async ()=>{
   
    WebViewCapacitor.loadUrl({url:`https://drive.google.com/file/d/1-kILeqXjfzkCz1iax0r6Gf_v86BZ7Hu4/view?usp=sharing`});
  }
  
  return (
    <Link to={`/story/${book.id}`} >
       <div className='relative w-[100px] h-auto sm:w-[160px] lg:w-[200px] xl:w-[270px] hover:cursor-pointer'>
        <img src="/content_background.png" className='w-full h-auto'></img>
        <img src={book.bookPic} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] height-auto sm:w-[90px] lg:w-[110px] xl:w-[150px]'></img>
        <img src={book.numberPic} className='absolute top-2 left-0 w-[30.6px] h-auto -translate-x-1/2 -translate-y-1/2 sm:w-[40.6px] sm:top-3 xl:w-[40px]'></img>
    </div>
   </Link>
   
  )
}

export default BookItem;
