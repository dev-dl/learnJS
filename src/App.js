import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Chat from './Chat'

class App extends Component {
  state = {

    chatSubjects: [
      {
        content : 'Introduction',
      },
    ],

    chatContents : [
      {
        name : 'YOUTH',
        content : 'I want to ask you once again; you do believe that the world is, in all ways, a simple place?',
      },
      {
        name : 'PHILOSOPHER',
        content : 'Yes, this world is astonishingly simple and life itself is, too.',
      },
      {
        name : 'YOUTH',
        content : 'So, is this your idealistic argument or is it a workable theory? What i mean is, are you saying that any issues you or I face in life are simple too?'
      },
      {
        name : 'PHILOSOPHER',
        content : 'Yes, of course'
      },
      {
        name : 'YOUTH',
        content : 'Alright then, but let me explain why I have come to visit you today. Firstly, I want to debate this with you until I am satisfied, and then, if possible, I want to get you to retract this theory.'
      },
      {
        name : 'PHILOSOPHER',
        content : 'Ha-ha'
      }
    ],
  }


  handleSubmit = (chatContent) => {
    this.setState({chatContents: [...this.state.chatContents, chatContent]})
  }

  render() {
    const {chatSubjects} = this.state
    const {chatContents} = this.state

    return (
      <div className="container">
        <Chat subjectData={chatSubjects} chatUnitData={chatContents}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

  

}

export default App
