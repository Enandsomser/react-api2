const Button = ({color, text}) => {
  const onClick = () => {
    console.log('Jim')
  }
  return <button onClick={onClick} style={{ 
    backgroundColor: color}} className="btn">{text} Jim button</button>
}

export default Button