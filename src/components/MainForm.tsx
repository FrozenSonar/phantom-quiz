import { Button, Card, Container, Text } from "@mantine/core";
import {
  PHANTOM_BLUE,
  PHANTOM_BLUE_DARKER,
  PHANTOM_BLUE_GRADIENT,
} from "../consts/colors";
import FormPageOne from "./FormPageOne";
import { joiResolver, useForm } from "@mantine/form";
import { MainFormProps, MainFormSchema } from "../schema/MainForm";
import { useState } from "react";

const initialValues = { firstName: "", lastName: "", movie: "" };

export default function MainForm() {
  const [doneForm, setDoneForm] = useState<boolean>(false);
  const form = useForm<MainFormProps>({
    initialValues,
    validate: joiResolver(MainFormSchema),
  });

  const onSubmit = form.onSubmit(() => {
    form.validate();
    setDoneForm(true);
    console.log("test")
  });

  return (
    <Container className="w-full">
      <Card
        shadow="lg"
        padding="lg"
        radius="sm"
        withBorder
        bg={PHANTOM_BLUE_GRADIENT}
      >
        <form onSubmit={onSubmit}>
          <div className="flex flex-col space-y-4">
            <div>
              <Text c={PHANTOM_BLUE_DARKER} size="lg" fw={800}>
                My Form
              </Text>
            </div>

            {doneForm ? (
              <div className="text-phantom-blue-darker text-center py-20">
                Thanks for submitting the form!
              </div>
            ) : (
              <FormPageOne form={form} />
            )}

            {!doneForm && (
              <div className="flex flex-col w-full items-end">
                <Button radius="md" bg={PHANTOM_BLUE} type="submit">
                  Submit
                </Button>
              </div>
            )}
          </div>
        </form>
      </Card>
    </Container>
  );
}
