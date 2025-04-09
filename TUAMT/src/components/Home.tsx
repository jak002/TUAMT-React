import InputCard from "./InputCard";
import ResultCard from "./ResultCard";

function Home()  {

    const undertitles = [
        <>...Developed by a European</>,
        <>What the <i>F&¤K</i> is a kilometer?!</>,
        <>For all your "measure in everything but metric" needs</>,
        <>Banana for scale</>,
        <>Verifiable freedom units for all!</>,
        <>Because measuring in feet is frankly weird</>,
        <>Eagles per gun coming in a later update</>,
        <><b>FREEEEEDOOOOOMMMMM!</b></>,
        <>As the founding fathers intended</>,
        <>Yes, small boulder and large boulder are the same. That's intentional</>,
        <>The other <i>other</i> big mac index!</>,
        <>Two hundred and ninety-five of God's own kilobytes</>
    ]

    const randomizer = Math.floor(Math.random()*undertitles.length)

    const chosenUndertitle = undertitles[randomizer]

    const kaboomgifs = [...Array(12).keys()].map(i => <img key={i} src="../src/assets/ezgif-4b2535dfa77997.gif"/>)

    return(
    <div className="flex flex-col justify-center justify-items-center text-center bg-white p-8 rounded-2xl shadow-2xl">
        <h1>The Ultimate American Measurement Tool</h1>
        <img src="../src/assets/eagleUSAnew.png" width={300} className="flex justify-center m-auto" />
        <br/>
        <div className="flex justify-center m-auto">
        {kaboomgifs}
        </div>
        <h3>{chosenUndertitle}</h3>
        <InputCard/>
        <hr/>
        <ResultCard/>
    </div>
    )
}

export default Home