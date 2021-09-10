import React from "react";
import { Image, Reveal } from 'semantic-ui-react'
const Contact = () => (
    <div>
        <Reveal animated='move down'>
          <Reveal.Content visible>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='small' />
          </Reveal.Content>
        </Reveal>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <p><i>I am Salem Hamdani,</i> </p>
        <p><i>an intern in the BFI group.</i> </p>
        <p><b>I try to learn more everyday.</b></p>
        </div>
      )

export default Contact;