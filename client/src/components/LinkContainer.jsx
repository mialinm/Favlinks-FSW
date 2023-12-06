import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

function LinkContainer() {
  const [favLinks, setFavLinks] = useState([]);

  const handleRemove = (index) => {
    const updatedLinks = [...favLinks];
    updatedLinks.splice(index, 1);
    setFavLinks(updatedLinks);
  };

  const handleSubmit = (newLink) => {
    setFavLinks([...favLinks, newLink]);
  };
//

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table! </p>
      <Table linkData={favLinks} removeLink={handleRemove} />
      <h1>Add New</h1>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default LinkContainer;