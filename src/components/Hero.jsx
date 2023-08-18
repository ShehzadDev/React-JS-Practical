import Counter from "./Counter";
export default function Hero()
{
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the
                    creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
                    entirely.</p>
                <Counter />
            </div>
        </section>
        
    )
}