import React from "react";

class AddOption extends React.Component {

  //New class Systax
  //It can declate fileds and function without constructor
  //state={error:undefined}
  //this binding can ommit and add arrow function instead
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => ({ error }));
      e.target.elements.option.value="";//Remove input then when click add
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
}

export default AddOption;