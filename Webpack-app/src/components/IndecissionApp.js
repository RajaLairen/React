import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options.js';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    constructor(props) { 
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handleSelectOption=this.handleSelectOption.bind(this);
      this.state = {
        options: [],
        selectOption:undefined
      };
    }
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState({selectOption:option});
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }

    handleSelectOption(){
      this.setState({selectOption:false});
    }
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
            <div className="container">
            <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
              />
              <div className="widget">
                  <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                  />
                  <AddOption
                    handleAddOption={this.handleAddOption}
                  />
                  <OptionModal 
                  selectOption={this.state.selectOption}
                  hanhandleSelectOption={this.handleSelectOption}
                  />
              </div>
            </div>
        </div>
      );
    }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;