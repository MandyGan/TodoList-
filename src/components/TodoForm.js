import Input from "@mui/joy/Input";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/joy/Button";
import { useState } from "react";
export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Add todo item"
          variant="outlined"
          color="primary"
          onChange={handleChange}
          value={text}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
              submit
            </Button>
          }
        />
      </form>
    </ListItem>
  );
};
