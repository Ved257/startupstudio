import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Icon from "feather-icons-react"

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] =useState("arrow-down")

  const toggle = () => {
    setIsOpen(!isOpen);
    if(!isOpen){
      setIcon( "arrow-left")
    }
    else{
      setIcon("arrow-down")
    }
  };

  return (
    <div>
        <ul onClick={toggle} style={{position:"relative", left:"90%"}}>
          <Icon icon={icon}/>
        </ul>
      <Collapse isOpen={isOpen} >
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;