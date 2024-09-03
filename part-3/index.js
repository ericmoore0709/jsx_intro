// Personal note: Could the instructions for this component be any more bizarrely worded? Do you Somebody please proofread these instructions, for Christ's sake.

/**
 * Personal note: 
 * Could the instructions for this component be any more bizarrely worded?
 * Does anybody proofread these before sending them out?
 * Or look at them *at all*?
 */

const Person = ({ name, age, hobbies }) => {
    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>{(age > 18) ? 'Please go vote!' : 'You must be 18.'}</h3>
            {(name.length > 8) ? name.substring(0, 5) : name}
            {hobbies.map(x => <li>{x}</li>)}
        </div>
    );
}


const App = () => {
    return (
        <div>
            <Person age={18} name={'Michael'} hobbies={['golfing', 'skiing', 'pasttime making']} />
            <Person age={6} name={'Borgerhauser'} hobbies={['borgar', 'cheeze', 'animalstyle fries']} />
            <Person age={2000} name={'Gath-blagath'} hobbies={['existing before the creation of time', 'creating horrors beyond the comprehension of mortal psyches', 'safeguarding the recipe to the most sinfully delicious red velvet cupcakes of all spacetime']} />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);