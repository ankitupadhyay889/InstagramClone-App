import React, {useState , useEffect} from 'react';
import "./App.css";
import Post from "./Post";
import {db,auth} from "./firebase";

import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open , setOpen] = useState(false);
  const [username , setUsername] = useState();
  const [password , setPassword] = useState();
  const [email , setEmail] = useState();
    // {
    //   username: "ankitupa",
    //   caption: "WoW!!!!!",
    //   imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    // },

    // {
    //   username: "rahul", 
    //   caption: "Happy!!!!!",
    //   imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    // }
    // y jo theek neeche likhe hai wo iske baad hi hai kuyki ki db se utha rahe hai firebase k firestore se


  useEffect(() => {
    db.collection('postkar').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email , password)
    .catch()
  }

  return (
    <>
        <div className="app">

          <Modal open={open} onClose={() => setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
              <form className="app_signup">
                <center>
                  <img className="app_headerimg" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="pic" />
                </center>
                <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" onClick={signUp}>SignUp</Button> 
              </form> 
            </div>
          </Modal>

          <div className="app_header">
            <img className="app_headerimg" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="pic" />
          </div>

          <Button onClick={() => setOpen(true)}>Sign Up</Button>

          {
            posts.map(({id,post}) => (
              <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            ))
          }

        </div>
    </>
  )
}

export default App