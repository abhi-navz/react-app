import { Person,Button,Header,List} from "./component"


function Output(){
    return(
        <>
        <h2>Assignment 01</h2>
        <Person name="John" age="30" />
        <Button text='Click Me' onClick= {()=>{alert('Button Clicked')}}></Button>
        <Header header="React Js Assignment one question no 03 " ></Header>
        <List items={['apple', 'banana', 'orange']} ></List>




        </>
    )
}

export default Output