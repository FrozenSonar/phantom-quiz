import { gql, useQuery } from "urql";

interface StarWarsFilm {
  title: string;
}

interface StarWarsQueryProps {
  allFilms: {
    films: StarWarsFilm[];
  };
}

const StarWarsQuery = gql`
  query Query {
    allFilms {
      films {
        title
      }
    }
  }
`;

export default function useGetStarWars() {
  const [result] = useQuery<StarWarsQueryProps, any>({
    query: StarWarsQuery,
  });

  const { data, fetching } = result;

  const filmsList = data?.allFilms?.films?.map(
    (film: { title: string }) => film?.title
  );

  return { filmsList, fetching };
}
