import { useEffect, useState } from "react";
import { landingPageDTO } from "../movies/movies.model";
import MoviesList from "../movies/MoviesList";

export default function LandingPage(){
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setMovies({
          inTheaters: [
            {
              id: 1,
              title: "Spide-Man: Far From Home",
              poster:
                "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
            },
            {
              id: 2,
              title: "Luca",
              poster:
                "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
            },
          ],
          upcomingReleases: [
            {
              id: 1,
              title: "Soul",
              poster:
                "https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg",
            },
            {
              id: 2,
              title: "Luca",
              poster:
                "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
            },
          ],
        });
      }, 1000);
  
      return () => clearTimeout(timerId);
    });

    return(
        <>
        <h3>In Theaters </h3>
          <MoviesList movies={movies.inTheaters} />
          <h3>Upcoming Releases</h3>
          <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}