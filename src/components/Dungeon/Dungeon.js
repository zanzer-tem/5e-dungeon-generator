import React from 'react';
import { StartingArea, STARTING_AREA } from './Section';
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
            var opening = newSections[newSections.length -1].exits[index];
            if(opening.trapped === true) {
                newSections[newSections.length -1].exits[index].locked = true;
                newSections[newSections.length -1].exits[index].description = newSections[newSections.length -1].exits[index].description + "TRAPPED!";
            } else {
                var newSection =  newSections[newSections.length -1].exits[index].leadsTo;
                newSections.push(newSection);
            }
            this.setState(newSections);
        
    }

    back() {    
       
        var newSections = this.state.sections;
        newSections.pop();
        this.setState(newSections);
    
    }
    

    render() {
       return <div className="dungeon">
               
                {this.state.sections.map((section, sectionIndex) => (
                    <div className="section">
                        <div className="section-header">
                            <p>
                                ~{sectionIndex + 1}~
                            </p>
                        </div>
                        <div className="section-description">
                            <em>{ section.description }</em>

                            <p>Exits:</p>
                            <ul>
                                {
                                    section.type !== STARTING_AREA? 
                                    <li key={sectionIndex+'back'}>{
                                        section === this.state.sections[this.state.sections.length -1] ? 
                                        <button onClick={this.back}>Back</button> :
                                        <em>Back</em>
                                    }</li> :
                                    ''
                                }
                                {
                                    section.exits.length > 0 ? section.exits.map((exit, index) => (
                                            <li key={sectionIndex+'exit'+index}>{
                                                exit.locked !== true &&  section === this.state.sections[this.state.sections.length -1] ?
                                                <button value={index} onClick={this.handleClick}>{exit.description}</button> :
                                                <em>{exit.description}</em>
                                            }</li> 
                                    )) : ''
                                }
                            </ul>
                            
                        </div>
                        
                    </div>
                    
                ))}
             </div>
    }
}

export default Dungeon;