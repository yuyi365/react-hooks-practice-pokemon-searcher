import React, {useState} from "react";
import { Form } from "semantic-ui-react";

const PokemonForm = ({addPokemon}) => {

  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form...");
    addPokemon({
      name : name,
      hp : hp,
      sprites : {
        front : frontUrl,
        back : backUrl,
      }
    })
    setName("")
    setHp("")
    setFrontUrl("")
    setBackUrl("")
    e.target.reset();
  }

  return (

    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
