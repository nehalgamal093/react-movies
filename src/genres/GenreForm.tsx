import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import { genereCreationDTO } from "./generes.model";

export default function GenreForm(props:genereFormProps){

    return(
        <Formik
        initialValues={
          props.model
        }
        onSubmit={props.onSubmit}
        
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUppercase(),
        })}
      >
        {(formikPros) => (
          <Form>
            <TextField field="name" displayName="Name" />
            <Button disabled={formikPros.isSubmitting} type="submit">
              Save Changes
            </Button>
            <Link className="btn btn-secondart" to="/genres">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    )
}

interface genereFormProps {

  model: genereCreationDTO;
  onSubmit(values: genereCreationDTO,action:FormikHelpers<genereCreationDTO>):void;
}