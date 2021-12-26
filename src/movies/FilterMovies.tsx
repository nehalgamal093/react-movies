import { Field, Form, Formik } from "formik";
import { genreDTO } from "../genres/generes.model";
import Button from "../utils/Button";

export default function FilterMovies() {
  const initialValues: filterMoviesForm = {
    title: "",
    genreID: 0,
    upcomingReleases: false,
    inTheaters: false,
  };
  const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Comedy" },
  ];
  return (
    <>
      <h3>Filter Movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title of the movie"
                  {...formikProps.getFieldProps("title")}
                />
              </div>
              <select
                className="form-select"
                {...formikProps.getFieldProps("genreID")}
              >
                <option value="0">-- Choose a genre --</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  id="upcomingRelease"
                  name="upcomingReleases"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="upcomingReleases">
                  Upcoming Releases
                </label>
              </div>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  id="inTeaters"
                  name="inTheaters"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="inTheaters">
                  in Theaters
                </label>
              </div>
            </div>
            <div className="col-auto">
              <Button
                className="btn btn-primary"
                onClick={() => formikProps.submitForm}
              >
                Filter
              </Button>
              <Button
                className="btn btn-danger ms-3"
                onClick={() => formikProps.setValues(initialValues)}
              >
                Clear
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface filterMoviesForm {
  title: string;
  genreID: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}
