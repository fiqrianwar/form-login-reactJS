    import React from 'react';
    import {Card,Image} from 'react-bootstrap'

    const CardUsers = ({dataAPI}) => {
    return (
        <div className='row' style={{justifyContent : 'space-around'}}>
            {
                dataAPI.map((item) => 
                
                    <Card style={{ width: '16rem', margin: '12px' }} key = {item.id}>
                        <Image 
                            src             = {item.avatar} 
                            style           = {{padding : '12px'}}
                            roundedCircle 
                            
                        />
                        
                        <Card.Body>
                            <h5 style={{textAlign : 'center'}}>{item.first_name} <span>{item.last_name}</span></h5>
                            <p style={{textAlign: 'center'}}><strong>Email : </strong>{item.email}</p>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
    }
    export default CardUsers