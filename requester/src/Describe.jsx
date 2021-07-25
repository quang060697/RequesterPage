import React from 'react'
import {Form,Input,Menu} from 'semantic-ui-react'

function Describe (props)
{
        return (
            <div>
            <Menu borderless inverted color='grey' > 
            <Menu.Item   >Describe your task to Workers</Menu.Item >  
            
            </Menu>
            <h3>
            <Form.Group  style={{display:'inline-block' }}>
            <Form.Field 
                label='Title'
                control={Input}
                onChange={props.titleChange}
                style={{padding:'10px',marginLeft:'60px',width:'400px' }}

            />
             <Form.Field 
                label='Description'
                control={Input}
                onChange={props.descriptionChange}
                style={{padding:'10px',marginLeft:'5px',width:'400px' }}

            />
              <Form.Field 
                label='Expiry Date'
                control={Input}
                onChange={props.expiryChange}
                style={{padding:'10px',marginLeft:'5px',width:'200px' }}

            />
            </Form.Group>
            <Menu borderless inverted color='grey' > 
            <Menu.Item   >Setting up your Task</Menu.Item >  
            </Menu>
            </h3>
            </div>




        )
}

export default Describe

