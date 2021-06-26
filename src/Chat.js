import React, {Component} from 'react'

const ChatSubject = (props) => {
    const subject = props.subjectData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.content}</td>
            </tr>    
        )
    })
    return (
        <div className="chat_subject">
            <h3>Subject :  {subject} </h3>                
        </div>    
      )
}


const ChatUnit = (props) => {
    const rows = props.chatUnitData.map((row, index) => {
        if (row.name=='YOUTH'){
            return (               
                <div key={index} >
                    <ul className = "chat_content">
                        <li className="YOUTH clearfix ">
                            <img src="young-man.png" className="YOUTH_profil" alt="young man profil"/> 
                            <div className="YOUTH_text">
                                <p>{row.content}</p>                            
                            </div>
                        </li>
                    </ul>   
                </div> 
            )
        }else{       
            return (
                <div key={index} >
                    <ul className = "chat_content">
                        <li  className=" PHILOSOPHER clearfix"> 
                            <img src="adele.png" className="PHILOSOPHER_profil" alt="wise man profil"/>
                            <div className = "PHILOSOPHER_text">
                                <p>{row.content} </p>
                            </div>
                        </li>
                    </ul>  
                </div>    
            )
        }
    })

    return (
        <div >
            {rows}
        </div>
    )
 
}






const Chat = (props) => {

        const {subjectData, chatUnitData} = props;

        return (
            <div className="small-container">           
              <ChatSubject subjectData = {subjectData}/>
              <div className = "chat_history" >
                <ChatUnit chatUnitData = {chatUnitData}/>
              </div>  
            </div>
          );
  }

export default Chat;