import BookItem from './BookItem'


export interface Book{
  id:number;
  bookPic:string;
  numberPic:string;
  url:string;
}

export const books:Book[] = [
  {id:1,bookPic:"/book1.png",numberPic:"/one.png",url:"/color_game/index.html"},
  {id:2,bookPic:"book2.png",numberPic:"two.png",url:"/color_game/index.html"},
  {id:3,bookPic:"book3.png",numberPic:"three.png",url:"/color_game/index.html"},
  {id:4,bookPic:"book4.png",numberPic:"four.png",url:"/color_game/index.html"},
  {id:5,bookPic:"book5.png",numberPic:"five.png",url:"/color_game/index.html"},
  {id:6,bookPic:"book6.png",numberPic:"six.png",url:"/color_game/index.html"},
  {id:7,bookPic:"book7.png",numberPic:"seven.png",url:"/color_game/index.html"},
  {id:8,bookPic:"book8.png",numberPic:"eight.png",url:"/color_game/index.html"},
  {id:9,bookPic:"book9.png",numberPic:"nine.png",url:"/color_game/index.html"}
]

export default function Content() {
 
 
  return (
    
      <div className='px-10 pt-2 overflow-auto mx-5 mb-4 sm:px-5 sm:pt-2 sm:mx-5 xl:mx-10 xl:pr-5 xl:pl-7 xl:ml-12' >
        <h4 className='text-lg font-semibold mb-6 sm:text-lg lg:text-2xl'>Story with lessons</h4>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-8 xl:gap-7'>
            {books.map((item:Book) => (
              <BookItem key={item.id} book={item}></BookItem>
            ))}
        </div>
        <h4 className='text-lg sm:text-lg font-semibold mb-6 mt-10 lg:text-2xl'>1st grade early reader</h4>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-8 xl:gap-7'>
            {books.map((item:Book) => (
              <BookItem key={item.id} book={item}></BookItem>
            ))}
        </div>
      </div>
   
  )
}
