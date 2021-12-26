import { Typeahead } from "react-bootstrap-typeahead"
import { act } from "react-dom/test-utils";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorMovieDTO } from "../actors/actors.model"

export default function TypeAheadActors(props: typeAheadActorsProps) {
  const actors : actorMovieDTO[] = [
    {
      id: 1,
      name: "Bendict",
      character: "",
      picture:
        "https://bloximages.newyork1.vip.townnews.com/mcdowellnews.com/content/tncms/assets/v3/editorial/2/cf/2cf7cacb-91ca-507f-963d-ce937ae6aff4/6197d846ba3fb.image.jpg",
    },
    {
      id: 2,
      name: "Tom",
      character: "",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGwm7EH5jOG4Omg2PzD6NraPDgxrYghokeg&usqp=CAU",
    },
    {
      id: 3,
      name: "Jack",
      character: "",
      picture:
        "https://static.wikia.nocookie.net/spellcasters/images/8/88/Captain_Jack_Sparrow.png/revision/latest/top-crop/width/360/height/450?cb=20200127161610",
    },
  ];
  const selected: actorMovieDTO[] = [];
  /*const [draggedElement, setDraggedElement]= setState<actorMovieDTO | undefined>(undefined);
  function handleDragStart(actor:actorMovieDTO){
    setDraggedElement(actor);

  }
  function handleDragOver(actor:actorMovieDTO){
    if(!draggedElement){
      return;
    }
    if(actor.id !== draggedElement.id){
      const draggedElementIndex = props.actors.findIndex(
        x=> x.id === draggedElement.id);
        const actorIndex = props.actors.findIndex(x=> x.id === actor.id);
        const actors =[...props.actors];
        actors[actorIndex] = draggedElement;
        actors[draggedElementIndex] = actor;
        props.onAdd(actors);
    }
  }*/
  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
    {/**   <Typeahead
                id="typeahead"
                onChange={actors => {
                  if(props.actors.findIndex(x=> x.id === actors[0].id ===-1)){
                    props.onAdd([...props.actors, actors[0]]);
                  }
                   
                    console.log(actors);
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
                selected ={selected}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="actor" src={actor.picture} 
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            />
            <ul className="list-group"
           
            >
                 {props.actors.map(actor => 
                 <li key={actor.id}
                 className="list-group-item list-group-item-action"
                 onDragStart={()=> handleDragStart(actor)}
                 onDragOver={()=> handleDragOver(actor)}
                 >
                   {props.listUI(actor)}
                   <span className="badge badge-primary badge-pill pointer text-dark"
                   style={{margin-left:'0.5rem'}}
                   onClick={() => props.onRemove(actor)}
                   ></span>
                 </li>)}           
                 </ul>*/}
    </div>
  );
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actors:actorMovieDTO[]):void;
  onRemove(actor:actorMovieDTO[]): void;
  listUI(actor:actorMovieDTO) :ReactElement;
}
