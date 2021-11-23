import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, FormControl } from "react-bootstrap";

import { createIcecream } from "../../api/icecream";

const FormCreate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const icecream = {
      nombre: e.target[0].value,
      sabor: e.target[1].value,
      precio: parseInt(e.target[2].value),
    };
    createIcecream(icecream);
    console.log(icecream);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombre">
        <Form.Label>Nombre Helado</Form.Label>
        <FormControl></FormControl>
      </Form.Group>
      <Form.Group controlId="sabor">
        <Form.Label>sabor Helado</Form.Label>
        <FormControl></FormControl>
      </Form.Group>
      <Form.Group controlId="precio">
        <Form.Label>precio Helado</Form.Label>
        <FormControl type="number"></FormControl>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default FormCreate;
