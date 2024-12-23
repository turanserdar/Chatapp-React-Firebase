import {
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    where,
  } from 'firebase/firestore';
  import { auth, db } from './../firebase/config';
  import { useEffect, useState } from 'react';
  import Message from '../components/Message';
  
  const ChatPage = ({ room, setRoom }) => {
    const [messages, setMessages] = useState([]);
  
    // When a message is sent
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Get the reference to the collection
      const messagesCol = collection(db, 'messages');
  
      // Add a new document to the collection
      await addDoc(messagesCol, {
        text: e.target[0].value,
        room,
        author: {
          name: auth.currentUser?.displayName,
          id: auth.currentUser?.uid,
          photo: auth.currentUser.photoURL,
        },
        createdAt: serverTimestamp(),
      });
  
      // Reset the form
      e.target.reset();
    };
  
    // Fetch messages sent in this room in real-time
    useEffect(() => {
      // Get the reference to the collection
      const messagesCol = collection(db, 'messages');
  
      // Set filtering options
      const q = query(
        messagesCol,
        where('room', '==', room),
        orderBy('createdAt', 'asc')
      );
  
      // Observe changes in the collection in real-time
      // Every time the collection changes, it calls the provided function
      // and passes the collection's documents as parameters
      onSnapshot(q, (snapshot) => {
        // Temporary array to hold data
        const tempMsg = [];
  
        // Iterate through documents, access their data, and add them to the array
        snapshot.docs.forEach((doc) => {
          tempMsg.push(doc.data());
        });
  
        // Update state with the messages
        setMessages(tempMsg);
      });
    }, [room]);
  
    return (
      <div className="chat-page">
        <header>
          <p>{auth.currentUser?.displayName}</p>
          <p>{room}</p>
          <button onClick={() => setRoom(null)}>Switch Room</button>
        </header>
  
        <main>
          {messages.map((data, i) => (
            <Message key={i} data={data} />
          ))}
        </main>
  
        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder="Write your message"
            type="text"
          />
          <button>Send</button>
        </form>
      </div>
    );
  };
  
  export default ChatPage;
  