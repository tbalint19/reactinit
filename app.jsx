const App = () => {

    const title = "This is a nav"

    const people = [
        { name: "bela", age: 30 },
        { name: "lajos", age: 40 },
        { name: "kazmer", age: 50 }
    ]

    return (
        <div id="app-container">
            <nav>{ title }</nav>
            {
                people.map(person => <p>{ person.name } - { person.age }</p>)
            }
            <article>This is an article</article>
            <footer>This is a footer</footer>
        </div>
    )
}