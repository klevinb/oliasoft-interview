import React from 'react';
import { Heading, Spacer, Button } from '@oliasoft-open-source/react-ui-library';

const Farm = ({
  imageSrc,
  farmName,
  description,
  moreInfo = undefined,
}) => {
  return (
    <>
      <img
        src={imageSrc}
        alt="new"
        width={500}
        height={250}
      />
      <div>
        <Heading>{farmName}</Heading>
        <p>
          {description}
        </p>
      </div>
      <Spacer height={10} />
      {moreInfo && (
        <Button label="Read more" colored />
      )}
    </>
  );
};

export { Farm };
