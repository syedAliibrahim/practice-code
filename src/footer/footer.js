import './footer.css'
function Footer({email}){
    
    return(
        <div>
            <h1>Hello World</h1>
            <h4> {email}</h4>
        </div>
    )
}
const SS = (we) => {
  return (
    <div> tick✔️{we.contact}</div>
  )
}
const Foo = (city) => {
  return (
    <div className="Foo"> {city.city}</div>
  )
}
export  {SS,Footer, Foo}

