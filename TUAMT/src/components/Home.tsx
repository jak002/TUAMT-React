import InputCard from "./InputCard";
import ResultCard from "./ResultCard";
import imgUrl1 from '../assets/eagleUSAnew.png'
import imgUrl2 from '../assets/ezgif-4b2535dfa77997.gif'

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

    const kaboomgifs = [...Array(12).keys()].map(i => <img key={i} src={imgUrl2} className=" min-h-0"/>)

    return(
    <div className="flex flex-col justify-center justify-items-center text-center max-w-4xl bg-white pt-2 p-5 rounded-2xl shadow-2xl">
        <h1>The Ultimate American Measurement Tool</h1>
        <p className=" italic text-sm font-light">v. 1.0.1</p>
        <img src={imgUrl1} className="flex justify-center m-auto max-w-72" />
        <br/>
        <div className="flex justify-center m-auto shrink">
        {kaboomgifs}
        </div>
        <h3>{chosenUndertitle}</h3>
        <InputCard/>
        <ResultCard/>
    </div>
    )
}

export default Home