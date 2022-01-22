import React from "react";
import { Button, Form } from "semantic-ui-react";

const SearchBar = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchForTopic(props.searchTopic);
  };

  const handleChange = (event) => {
    props.setSearchTopic(event.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Search topic"
            name="topic"
            value={props.searchTopic}
            onChange={handleChange}
          />
          <Button type="submit" color="green">
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
