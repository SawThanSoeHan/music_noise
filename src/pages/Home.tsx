import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './globals.css';
import './Home.css';
import Topbar from '../components/main/Topbar';
import Content from '../components/main/Content';


const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    // <IonPage id="home-page">
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Inbox</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent fullscreen>
    //     <IonRefresher slot="fixed" onIonRefresh={refresh}>
    //       <IonRefresherContent></IonRefresherContent>
    //     </IonRefresher>

    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">
    //           Inbox
    //         </IonTitle>
    //       </IonToolbar>
    //     </IonHeader>

    //     <IonList>
    //       {messages.map(m => <MessageListItem key={m.id} message={m} />)}
    //     </IonList>
    //   </IonContent>
    // </IonPage>
    <IonPage>
      <IonContent>
        <div className={` flex flex-col h-screen w-screen py-4`}>
        <Topbar/>
        <Content/>
        </div>
      </IonContent>
      
    </IonPage>
   
  );
};

export default Home;
