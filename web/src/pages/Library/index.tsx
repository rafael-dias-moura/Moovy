import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { apiMoovy } from "../../services/api";
import Lupa from "../../assets/lupa.svg";
import { MovieCard } from "../../components/Cards";
import { IMovie } from "../../components/interfaces";
import IconRemove from "../../assets/iconRemove.svg";

export function Library() {
  const [emptyLibrary, setEmptyLibrary] = useState(true);

  const [movies, setMovies] = useState<IMovie[]>([]);

  async function Remove(id: string): Promise<void> {
    try {
      await apiMoovy.delete(`/movies/${id}`);
      const updatedList = movies.filter((movie) => movie.imdbID !== id);
      setMovies(updatedList);
    } catch (error) {
      console.error(`Erro ao remover filme ${id}:`, error);
    }
  }
  useEffect(() => {
    apiMoovy.get("/movies").then((response) => {
      const { data } = response;
      if (data && data.lenght !== 0) {
        setMovies(data);
        console.log(movies);
        setEmptyLibrary(false);
      } else {
        setEmptyLibrary(true);
      }
    });
  }, []);

  return (
    <div className="max-w-[1440px] h-screen mx-auto">
      <Header />
      <div>
        <h1 className="font-inter font-normal text-2xl ml-72 mt-[56px]">
          My library
        </h1>

        {emptyLibrary && (
          <center className="flex={1} h-screen mt-[90px]">
            <img src={Lupa} alt="Empty Library w-[165px] h-[165px]" />
            <h2 className="mt-[31px]">
              It looks like there are no<br></br>
              movies in your library!<br></br>
              Search for a movie you<br></br>
              have watched and add it<br></br>
              here!
            </h2>
          </center>
        )}

        {movies && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 ml-72 mt-12 max-h-[548px]">
            {movies.map((movies) => (
              <div key={movies.imdbID} className="gap-2 space-x-4">
                <MovieCard
                  movie={movies}
                  colorButton={"bg-pink-500"}
                  textButton={"Remove"}
                  iconButton={IconRemove}
                  Remove={Remove}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
