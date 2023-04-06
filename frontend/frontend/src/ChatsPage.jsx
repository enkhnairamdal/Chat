import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  
    return (
        <div style={{height:'100vh'}}>
           <PrettyChatWindow 
           projectId="85427309-abe4-49e5-b9b3-d5b76d14fd00"
           username={props.user.username}
           secret={props.user.secret}
           style={{height: '100%'}}
           />

        </div>
    )
}
export default ChatsPage