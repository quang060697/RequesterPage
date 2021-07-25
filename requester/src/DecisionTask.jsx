import React from 'react'
import { Form,Input } from 'semantic-ui-react'


function DecisionTask  ()
{

        return (
            <Form.Group style={{ display: 'inline-block', marginTop:'20px' }}>
            <h3>
            <Form.Field 
                label='What is your degree?'
                control={Input}
                
                style={{padding:'10px',marginLeft:'140px',width:'400px' }}

            />
           
            <Form.Field 
                label='
                What Role Do You Play in a Group?'
                control={Input}
                
                style={{padding:'10px',marginLeft:'30px',width:'400px' }}

            />
                </h3>
            </Form.Group>
        )
}

export default DecisionTask
