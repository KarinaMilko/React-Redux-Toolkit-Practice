import * as yup from "yup";

export const TODO_VALIDATION_SCHEMA = yup.object({
  newTodo: yup.string().min(2).max(50).required(),
});
