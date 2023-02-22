import { Button, Column, Heading } from "@oliasoft-open-source/react-ui-library";
import React from "react";

const Farm = ({ src, altName, description, title, button=false }) => {
  console.log("scr",src)
  return (
      <>      
        <img src={src} alt={altName} width={500} height={250} />
        <div>
          <Heading>{title}</Heading>
          <p>{description}</p>
        </div>
        {button ? <Button label="Read more" colored />:""}
      </>
  );
};

export default Farm;
