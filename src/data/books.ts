export interface Book{
    id:number;
    bookPic:string;
    numberPic:string;
    url:string;
  }
  
  const books:Book[] = [
    {id:1,bookPic:"book1.png",numberPic:"one.png",url:"https://sawthansoehan.github.io/karen_story_learn111/"},
    {id:2,bookPic:"book2.png",numberPic:"two.png",url:"https://sawthansoehan.github.io/music_noise/"},
    {id:3,bookPic:"book3.png",numberPic:"three.png",url:"https://sawthansoehan.github.io/karen_story_learn111/"},
    {id:4,bookPic:"book4.png",numberPic:"four.png",url:"https://sawthansoehan.github.io/music_noise/"},
    {id:5,bookPic:"book5.png",numberPic:"five.png",url:"https://sawthansoehan.github.io/karen_story_learn111/"},
    {id:6,bookPic:"book6.png",numberPic:"six.png",url:"https://sawthansoehan.github.io/music_noise/"},
    {id:7,bookPic:"book7.png",numberPic:"seven.png",url:"https://sawthansoehan.github.io/karen_story_learn111/"},
    {id:8,bookPic:"book8.png",numberPic:"eight.png",url:"https://sawthansoehan.github.io/music_noise/"},
    {id:9,bookPic:"book9.png",numberPic:"nine.png",url:"https://sawthansoehan.github.io/karen_story_learn111/"}
  ]

export const getBooks = () => books;

export const getBook= (id: number) => books.find(m => m.id === id);