import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/generes.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];
  const selectedGenres: genreDTO[] = [{ id: 1, name: "Drama" }];
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 2, name: "Agora" },
  ];
  const selectedActors: actorMovieDTO[] = [{
    id: 1, name:'jack',character:'', picture:''
  },
  {
    id: 2, name:'Tom',character:'', picture:''
  }
]
  const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: "Sambil" }];
  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Toy Story",
          inTheaters: true,
          trailer: "",
          releaseDate: new Date("2019-01-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={selectedActors}
      />
    </>
  );
}
