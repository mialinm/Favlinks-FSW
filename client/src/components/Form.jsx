import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [URL, setURL] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleURLChange = (event) => {
    setURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { name, URL });
    props.handleSubmit({ name, URL });
    setName('');
    setURL('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="linkName">Link Name:</label>
      <input type="text" id="linkName" name="linkName" value={name} onChange={handleNameChange} />
      <br />
      <br />
      <label htmlFor="linkURL">Link URL:</label>
      <input type="text" id="linkURL" name="linkURL" value={URL} onChange={handleURLChange} />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
