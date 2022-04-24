export default function ListItem(props) {
  return (
    <li className="listItem">
      <div className="listItemLabel">
        Name: <span>{props.fullname}</span>
      </div>
      <div className="listItemLabel">
        Age: <span>{props.age}</span>
      </div>
      <div className="listItemLabel">
        Address: <span>{props.address}</span>
      </div>
      <div className="listItemLabel">
        Languages: <span>{props.language}</span>
      </div>
    </li>
  );
}
