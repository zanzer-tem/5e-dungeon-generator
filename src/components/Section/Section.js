import React from 'react';
import './Section.css';
import {STARTING_AREA} from '../Dungeon/Section';

function Section(props) {
  var section = props.section;
  var sectionIndex = props.sectionIndex;
  var currentSection = props.currentSection;
  return (
    <div className="section">
        <div className="section-header">
            <p>
                ~{sectionIndex + 1}~
            </p>
        </div>
                        <span className="section-usage">
                            {section.usage}
                        </span>
                        <span className="section-description">
                                <em>{ section.description }</em>

                                <p>Exits:</p>
                                <ul>
                                    {
                                        section.type !== STARTING_AREA? 
                                        <li key={sectionIndex+'back'}>{
                                            currentSection ? 
                                            <button onClick={props.clickBack}>Back</button> :
                                            <em>Back</em>
                                        }</li> :
                                        ''
                                    }
                                    {
                                        section.exits.length > 0 ? section.exits.map((exit, index) => (
                                                <li key={sectionIndex+'exit'+index}>{
                                                    exit.locked !== true &&  currentSection ?
                                                    <button value={index} onClick={props.handleClick}>{exit.description}</button> :
                                                    <em>{exit.description}</em>
                                                }</li> 
                                        )) : ''
                                    }
                                </ul>
                        </span>
                        
                    </div>
  );
}

export default Section;