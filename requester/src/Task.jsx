import React from 'react';
import {Menu,Form,Radio} from 'semantic-ui-react'


function Task(props){
   
        return (
            <div>
                <h3>
            <Menu borderless inverted color='grey' > 
            <Menu.Item   >New Requester Task</Menu.Item >  
            <Menu.Item   >Worker Task</Menu.Item >  
            </Menu>
            <Form.Group  style={{ display: 'flex' }}>
            <p> Select Task:</p>

            <Form.Field 
                label='Choice Task'
                control={Radio}
                checked={props.choiceCheck}
                value= {props.choice}
                onChange={props.choiceChange}
                style={{ marginRight:'150px',marginLeft:'150px' }}

            />
            <Form.Field 
                label='Decision-Making Task'
                control={Radio}
                checked={props.decisionCheck}
                value={props.decision}
                onChange={props.decisionChange}
                style={{ marginRight:'150px',marginLeft:'150px' }}

            />
            <Form.Field 
                
                label='Sentence-Level Task'
                control={Radio}
                checked={props.sentenceCheck}
                value={props.sentence}
                onChange={props.sentenceChange}
                style={{ marginRight:'150px',marginLeft:'150px' }}

            />
            </Form.Group>
            </h3>
            </div>
        )
    
        
}

export default Task



