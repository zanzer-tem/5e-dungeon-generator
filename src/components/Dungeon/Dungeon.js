import React from 'react';
import { StartingArea, Passage } from './DungeonHelper';

class Dungeon extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            sections: [] 
        };
        this.handleClick = this.handleClick.bind(this);  
        
    }

    componentDidMount() {
        var newSections = this.state.sections;
        newSections.push(StartingArea());
        this.setState({sections: newSections});
    }

    handleClick() {    
        var newSections = this.state.sections;
        newSections.push(Passage());
        this.setState({sections: newSections});
    }

    render() {
       return <div className="dungeon">
                <span role="img" aria-label="skull">&#x1F480;</span>
                <div>
                    <button type="button" onClick={this.handleClick}>Next</button> 
                </div>
                {this.state.sections.map(section => (
                    <div>
                        <em>{section}</em>
                    </div>
                ))}
             </div>
    }
}

export default Dungeon;