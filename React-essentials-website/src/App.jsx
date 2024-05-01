import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/TabButton/Examples.jsx";

function App() {



    return (
        <>
            <Header></Header>
            <main>
                <CoreConcepts></CoreConcepts>
                <Examples></Examples>
            </main>
        </>
    );
}

export default App;
