const FirstComponent = () => {
    return (
        <h1>My Very First Component</h1>
    )
}

const NamedComponent = ({ name }) => {
    return (
        <p>My name is {name}.</p>
    )
}

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name={'Inigo Montoya'} />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);