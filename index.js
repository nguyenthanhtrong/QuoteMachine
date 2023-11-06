function App() {

    const [quotes, setquote] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [colors, setcolors] = React.useState("#111");
    React.useEffect(() => {

        async function fetchdata() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            setquote(data);

            let handRandom = Math.floor(Math.random() * data.length);
            setRandomQuote(handRandom);
        }
        fetchdata();
    }, [])


    const getNewQuote =()=>{
        const colors =[
            "#16a885",
            "#27ae60",
            "#996633",
            "#666633",
            "#FF3333",
            "#FF33CC",
            "#003300",
            "#FF66CC"
        ];
        let hanldrandom = Math.floor(Math.random() * quotes.length)
        let hanldcolorrandom = Math.floor(Math.random() * colors.length)
        setRandomQuote(quotes[hanldrandom])
        setcolors(colors[hanldcolorrandom])
    }
    return(
   <div style={{backgroundColor: colors, minHeight: "100vh"}}>     
    <div className="container pt-5">
        <div className="jumbotron">
            <div className="card">
                <div className="card-header">Quotes</div>
                <div className="card-body">
                {randomQuote ? (
                                <>
                                    <h5 className="card-title">-{randomQuote.author || "No Author"}</h5>
                                    <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                                </>
                            )  : (
                                <h2>Loading</h2>
                            )
                        }
                        <div className="buttons">
                            <button type="button" onClick={getNewQuote} className="btn btn-primary">New Quote</button>
                            
                            {/* <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                            encodeURIComponent(
                                '"' + randomQuote.text +'"'+ randomQuote.author
                            )}
                            target="_blank"
                            className="btn btn-warning">
                            <i className="fa fa-twitter"></i>
                            </a>
                            <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + 
                                encodeURIComponent(randomQuote.author) + "&content=" + encodeURIComponent(randomQuote.text)+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
                            }
                            target="_blank"
                            className="btn btn-danger">
                                <i className="fa fa-tumblr">
                                    
                                </i>
                            </a> */}
                        </div>
                </div>
                
            </div>
        </div>
    </div> 
</div>
    );
}
ReactDOM.render(<App/> , document.getElementById('app'))