const Tweet = ({ username, full_name, date, message }) => {
    return (
        <div className="tweet">
            <div className="tweet_metadata">
                <div>
                    <span><strong>{full_name}</strong></span>&nbsp;
                    <span><small>@{username}</small></span>
                </div>
                <div>
                    <small>{date}</small>
                </div>
            </div>
            <div className="message_block">
                <pre>
                    {message}
                </pre>
            </div>
        </div>
    );
}

const App = () => {

    let tweets = [];

    // populating with some terrible dummy data
    for (let i = 1; i <= 3; i++) {
        tweets.push(<Tweet key={(4 - i)} username={"username" + (4 - i)} full_name={"First" + (4 - i) + " Last" + (4 - i)} date={new Date(Date.now() - (i * 69696969)).toLocaleString()} message={"This is message number " + (4 - i) + "."} />)
    }

    return (
        <div className="tweet_list">
            {tweets}
        </div>
    );
}

// more readable than in Part 1, but I don't like it because I know I can write it in one line.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);