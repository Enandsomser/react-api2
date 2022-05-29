import Button from "./Button"

//<Button color='red' text='Time for the'/>
//<Button color='blue' text='I like the'/>

const Header = (props) => {
  return (
    <header className='header'>
        <h1>{props.title} this is a robbery</h1>
        <Button color='green' text='Hello to the'/>
    </header>
  )
}

export default Header