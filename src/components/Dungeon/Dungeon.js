import React from 'react';
import { StartingArea } from './Section';
import Section from '../Section/Section';
import './Dungeon.css';
class Dungeon extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            sections: []
        };   
        this.handleClick = this.handleClick.bind(this);
        this.clickBack = this.clickBack.bind(this);
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

    clickBack() {    
       
        var newSections = this.state.sections;
        newSections.pop();
        this.setState(newSections);
    
    }
    

    render() {
       return <div className="dungeon">
                    {this.state.sections.map((section, sectionIndex) => (
                        <Section section={section} sectionIndex={sectionIndex} currentSection={section === this.state.sections[this.state.sections.length -1]} handleClick={this.handleClick} clickBack={this.clickBack}/>
                    ))}
             </div>
    }
}

export default Dungeon;