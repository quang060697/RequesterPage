import React from 'react'
import { Form,Input } from 'semantic-ui-react'


function SentenceTask () 
{
        return (
            <Form.Group style={{ display: 'inline-block', marginTop:'20px' }}>
           <h3>
            <Form.Field 
                label='Can you write something about yourself?'
                control={Input}
                
                style={{padding:'10px',marginLeft:'50px',width:'400px', height:'100px' }}

            />
            </h3>
                
            </Form.Group>
        )
}
export default SentenceTask


