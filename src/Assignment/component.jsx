
export function Person(props) {
    return (
      <p>
        {props.name} is {props.age} years old.
      </p>
    );
  }
  

export function Button(props){
    return (
        <>  
        <button onClick={props.onClick}>{props.text}</button>
        </>
    )
}
export function Header(props){
    return (
        <>
        <h1>{props.header}</h1>
        </>
    )
}

export function List(props){
    const listItems = props.items.map((item) =>
    <li key={item}>{item}</li>
  );
  
  return <ul>{listItems}</ul>;

}