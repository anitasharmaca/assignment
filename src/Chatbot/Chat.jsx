import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Chat.css';
import Msg from './Msg';
//mport moment from 'moment';

const Chat = () => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState([
        {
            msg: "Hey, may I Know Your Name Please!",
        },
    ])
    const onSend = () =>{
        let list = [...message, {msg: text, user: true}];
        if(list.length > 2){
            const reply = Replying(text);
            list = [...list, {msg: reply}];
        } else{
            list = [...list, 
            {
                msg: `Hey, ${text}`
            },
            {
                msg: `how May i help you ${text}?`
            },
            ]
        }
        setMessage(list);
    }
  return(
  <section>
    <h1 className="text-center">Chat Application</h1>
    <div className="chat">
        <div className="mainchat">
            {message.length > 0 && message.map((data) => <Msg {...data} />)}
        </div>
        <div className="send">
            <input type="text" className='type' onChange={(event) => setText(event.target.value)} />
            <button className='btn' onClick={onSend}>send</button>
        </div>
    </div>
  </section>
  )
}
export function Replying(text){
    const [option, setOption] = useState([
        {option: "react" },
        {option: "angular"},
    ]);
    if(text.includes('hi') || text.includes('hello'))
    return 'Hi, How can i help you?'
    // else if(text.includes('date'))
    // return moment().format("MMMM Do YYYY")
    // else if(text.includes('time'))
    // return moment().format('h:mm:ss a')
    else if(text.includes('google link'))
    return 'https://www.google.com'
    else if(text.includes('interest'))
    return 'Bank interest Rate is 8.7'
    else if(text.includes('thank you'))
    return "Thanks for contacting Us!"
    else if(text.includes('course'))
    return `we have these following programms ,${option}`
    else 
    return 'i Can not get you. Can you rephrase the message'
}
export default Chat
