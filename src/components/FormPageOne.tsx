import { Loader, Select, TextInput } from "@mantine/core";
import useScreen from "../hooks/useScreen";
import useGetStarWars from "../hooks/useGetStarWars";
import { UseFormReturnType } from "@mantine/form";
import { MainFormProps } from "../schema/MainForm";
import { PHANTOM_BLUE, PHANTOM_BLUE_DARKER } from "../consts/colors";

interface FormPageOneProps {
  form: UseFormReturnType<
    MainFormProps,
    (values: MainFormProps) => MainFormProps
  >;
}

export default function FormPageOne({ form }: FormPageOneProps) {
  const { isMobile } = useScreen();
  const { filmsList, fetching } = useGetStarWars();

  return (
    <div className="flex flex-col ">
      <div
        className={
          isMobile ? "flex flex-col space-y-4" : "grid grid-cols-2 gap-4"
        }
      >
        <TextInput
          label="First name"
          c={PHANTOM_BLUE_DARKER}
          placeholder="John"
          radius="md"
          required
          className="w-full "
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last name"
          c={PHANTOM_BLUE_DARKER}
          placeholder="Doe"
          radius="md"
          required
          className="w-full"
          {...form.getInputProps("lastName")}
        />

        <Select
          label="Favorite Star Wars movie"
          c={PHANTOM_BLUE_DARKER}
          placeholder={fetching ? "Loading movies..." : "Pick a movie"}
          radius="md"
          disabled={fetching}
          data={filmsList}
          searchable
          checkIconPosition="right"
          leftSection={fetching && <Loader color={PHANTOM_BLUE} size="sm" />}
          {...form.getInputProps("movie")}
        />
      </div>
    </div>
  );
}
