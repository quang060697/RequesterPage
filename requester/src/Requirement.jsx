import React from 'react'
import { Form, Input, Menu } from 'semantic-ui-react'

function Requirement(props) {
    return (
        <div>

            <Menu borderless inverted color='grey' style={{ marginTop: '50px' }} >
                <Menu.Item   >Describe your task to Workers</Menu.Item >

            </Menu>
            <h3>
            <Form.Group style={{ display: 'inline-block' }}>
                <Form.Group style={{ display: 'flex' }}>
                    <p>   Require Master Workers</p>
                    <Input
                        type="radio"
                        name="yes" value="yes"
                        checked={props.yesCheck}
                        onChange={props.yesChange}
                        style={{  marginLeft: '50px',marginRight: '20px'  }} />
                    <label style={{  marginRight: '50px' }}  >Yes</label>
                    <Input
                        type="radio"
                        name="no"
                        value="no"
                        checked={props.noCheck}
                        onChange={props.noChange}
                        style={{ marginLeft: '10px',marginRight: '20px'  }} />
                    <label >No</label>
                </Form.Group>

                <Form.Field
                    label='Reward per response'
                    control={Input}
                    onChange={props.rewardChange}
                    style={{ padding: '10px', marginLeft: '60px', width: '200px' }}

                />
                <Form.Field
                    label='Number of worker'
                    control={Input}
                    onChange={props.numberChange}
                    style={{ padding: '10px', marginLeft: '82px', width: '200px' }}

                />
            </Form.Group>
            </h3>
        </div>




    )
}

export default Requirement

