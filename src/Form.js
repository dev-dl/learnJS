import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			name: 'YOUTH',
			content: '',
			whoIsNext : true,
		};

    }


  handleChange = (event) => {
	  const {name, value} = event.target;

	  this.setState({
		[name] : value,
	});
	}

	onFormSubmit = (event) => {
        event.preventDefault();
		
		this.setState({
			name: this.state.whoIsNext ? 'PHILOSOPHER' : 'YOUTH',
			content: '',
			whoIsNext : !this.state.whoIsNext,
		  });

        this.props.handleSubmit(this.state);

    }


	render() {
	  const { name,content } = this.state;
	  
	  return (
		<div className="small-container">
			<form className=" chat_entry" onSubmit={this.onFormSubmit}>		  
			<label for="content">{this.state.name} <span> is typing... </span></label>
			<div>
				<textarea className="chat_textarea" 
					type="text"
					name="content"
					id="content"
					value={content}
					onChange={this.handleChange} />
				<button type="submit" className="chat_submit">
					send
				</button>	
			</div>
			</form>
		</div>
	  );
	}

	
}
export default Form;
