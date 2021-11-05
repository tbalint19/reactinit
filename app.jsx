const Card = ({ person }) => {

    return (
        <div className="card">
            <h1>{ person.name }</h1>
            <p>{ person.age }</p>
        </div>
    )
}

const App = () => {

    const [ title, setTitle ] = React.useState("")
    const [ messageIsShow, setMessageIsShown ] = React.useState(false)
    const [ people, setPeople ] = React.useState([
        { name: "bela", age: 30 },
        { name: "lajos", age: 40 },
        { name: "kazmer", age: 50 }
    ])

    const changeHandler = (event) => {
        setMessageIsShown(true)
        setTitle(event.target.value)
    }

    const deleteAll = () => {
        setPeople([])
    }

    return (
        <div id="app-container">
            <p>{ title }</p>
            { messageIsShow && <p>{ title.length > 3 ? <p>Good username</p> : <p>Too short</p> }</p> }
            
            <input type="text" onChange={changeHandler} value={title}/>

            <button disabled={title.length < 4}>Signup</button>
            {
                people.map(elem => <Card person={elem} />)
            }

            <button onClick={deleteAll}>Delete all</button>
            <article>This is an article</article>
            <footer>This is a footer</footer>
        </div>
    )
}