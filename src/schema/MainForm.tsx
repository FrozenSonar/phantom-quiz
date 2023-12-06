import Joi from "joi";
import { MINIMUM_STRING_LENGTH } from "../consts/consts";

export interface MainFormProps {
  firstName: string;
  lastName: string;
  movie: string;
}

export const MainFormSchema = Joi.object({
  firstName: Joi.string().min(MINIMUM_STRING_LENGTH).messages({
    "string.min": "First Name should have at least 2 letters",
    "string.empty": "You need to enter a first name.",
  }),
  lastName: Joi.string().min(MINIMUM_STRING_LENGTH).messages({
    "string.min": "Last Name should have at least 2 letters",
    "string.empty": "You need to enter a last name.",
  }),
  movie: Joi.string().messages({
    "string.empty": "You need to pick a movie.",
  }),
});
