import React from 'react'
import { Form, Input} from 'semantic-ui-react'


function ChoiceTask ()
{
        return (
            <div>
           <Form.Group style={{ display: 'inline-block', marginTop:'20px' }}>
           <h3>
           <Form.Field 
               label='What important choices that you have made in workplace?'
               control={Input}
               
               style={{padding:'10px',marginLeft:'27px',width:'400px' }}

           />
           <Form.Field 
               label='
               What position do you want to be in a team?'
               control={Input}
               
               style={{padding:'10px',marginLeft:'150px',width:'400px' }}

           />
                </h3>
           </Form.Group>
          
            </div>
            
              
        )
}

export default ChoiceTask;




