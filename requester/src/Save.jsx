import React from 'react'
import { Button} from 'semantic-ui-react'

function Save (props)
 { 
        return (
        <div >
            <Button primary style={{width:'300px',marginLeft:'600px' }} onClick={props.Submit}>Submit</Button>
            </div>
        )
}
export default Save
