import React from 'react';

function Welcome (props){
return(
<div className="Welcome">
    WELCOME , {props.name} 
    {props.match.params.name} !
</div>
);
}

export default Welcome;