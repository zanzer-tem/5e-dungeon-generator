import React from 'react';
import { StartingArea, STARTING_AREA } from './StartingArea';
import './Dungeon.css';
class Dungeon extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            sections: []
        };   
        this.handleClick = this.handleClick.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {
        var newSections = this.state.sections;
        newSections.push(StartingArea());
        this.setState({sections: newSections});
    }

    handleClick(event) {    
            var index = event.target.value;
            var newSections = this.state.sections;
        
            var newSection =  newSections[newSections.length -1].exits[index];
            newSections.push(newSection);
            this.setState(newSections);
        
    }

    back() {    
       
        var newSections = this.state.sections;
        newSections.pop();
        this.setState(newSections);
    
    }
    

    render() {
       return <div className="dungeon">
                <span role="img" aria-label="skull">&#x1F480;</span>
                <p>Refresh for a new dungeon</p>
                <hr/>
                {this.state.sections.map(section => (
                    <div>
                        <em>{section.description}</em>

                        <p>Exits:</p>
                        <ul>
                            {
                                section.type !== STARTING_AREA? 
                                <li>{
                                    section === this.state.sections[this.state.sections.length -1] ? 
                                    <button onClick={this.back}>Back</button> :
                                    <em>Back</em>
                                }</li> :
                                ''
                            }
                            {
                                section.exits.length > 0 ? section.exits.map((exit, index) => (
                                        <li>{
                                            exit.locked !== true && exit.exits.length > 0 && section === this.state.sections[this.state.sections.length -1] ?
                                            <button value={index} onClick={this.handleClick}>{exit.description}</button> :
                                            <em>{exit.description}</em>
                                        }</li> 
                                )) : ''
                            }
                        </ul>
                        <hr/>
                    </div>
                ))}
             </div>
    }
}

export default Dungeon;