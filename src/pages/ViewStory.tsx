import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Message } from '../data/messages';
import { Book, getBook } from '../data/books';
import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react';
import  './ViewStory.css'

export default function ViewStory() {
    const [book, setBook] = useState<Book>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const bk = getBook(parseInt(params.id, 10));
    setBook(bk);
  });
  
  return (
    <IonPage>
        <IonContent>
        <iframe src={book?.url} className='full_screen'/>
        </IonContent>
   
    </IonPage>
   
  )
}
