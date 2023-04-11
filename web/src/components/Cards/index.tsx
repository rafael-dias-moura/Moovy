import Star from "../../assets/star.svg";
import { IMovie } from "../interfaces";

interface props {
  movie: IMovie;
  colorButton: string;
  textButton: string;
  iconButton: string;
  Remove: (imdbID: string) => void;
}

export function MovieCard({
  movie,
  colorButton,
  textButton,
  iconButton,
  Remove,
}: props) {
  const movieDelete = (): void => {
    Remove(movie.imdbID);
  };

  return (
    <div className="max-w-[326px] max-h-[548px] bg-white rounded-xl overflow-hidden">
      <img
        className="max-h-[418px] max-w-[300px] rounded-xl ml-3 mt-3.5"
        src={movie.Poster}
      />
      <div className="flex flex-row content-center justify-between">
        <h2 className="font-arial font-normal text-xl ml-6 mt-3">
          {movie.Title}
        </h2>
        <div className="flex flex-row items-center mt-2 mr-9 gap-2">
          <img src={Star} alt="rating" className="w-6 h-5" />
          <h2 className=" font-arial font-normal text-xl text-gray-500">
            {movie.imdbRating}
          </h2>
        </div>
      </div>
      <div className="ml-6 mr-7 mt-2 mb-3.5 max-w-full">
        <button
          onClick={movieDelete}
          className={`flex flex-row items-center gap-10 rounded-xl w-64 h-11 ${colorButton}`}
        >
          <img src={iconButton} alt="remove" className="w-6 h-6 ml-6" />
          <span className="font-arial font-normal text-xl">{textButton}</span>
        </button>
      </div>
    </div>
  );
}
