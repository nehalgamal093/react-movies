import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Tom Holand",
          dateOfBirth: new Date("1996-06-01T00:00:00"),
          biography:`#Something this person was born here **AR**`,
          pictureURL:
            "https://static.wikia.nocookie.net/disney/images/8/85/Benedict_Cumberbatch.jpg/revision/latest?cb=20190718195642",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
