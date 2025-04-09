import ImageCard from "./ImageCard"

const About = () => (
    <div className="flex text-center flex-col justify-center bg-white p-2 rounded-2xl shadow-2xl">
        <h1>About</h1>
        <div className="flex justify-center px-3 m-3">
        <div className="flex text-start flex-col justify-center mx-2 p-2">
        <p>So you may be wondering: <b><i>What the hell is the meaning of this site?</i></b></p>
        <p>Frankly, it makes no sense to measure in trombones or big macs, and I assume most others would think the exact same.</p>
        <br></br>
        <p>Thing is, <i>american news outlets keep doing it anyway.</i></p>
        </div>
        <ImageCard url="../src/assets/eagleUSAnew.png" imageText="This is a test of image cards!"/>
        </div>
        <div className="flex justify-center px-3 m-3">
            <ImageCard url="../src/assets/eagleUSAnew.png" imageText="This is technically a different image card!"/>
        <div className="flex text-start flex-col justify-center mx-2 p-2">
            <p>As if the imperial system isn't stupid enough, there are <i>so</i> many examples of articles and programs providing measures in bizarre units.</p>
            <p>At this point, it has happened so often that "Americans will measure in everything but metric" has been a meme for ages.</p>
            <p>And now, finally, <b><i>you, too, can do the same!</i></b></p>
        </div>
        </div>
        <br></br>
        <h2>Ok but why did you make this?</h2>
        <div className="flex justify-center px-3 m-3">
        <div className="flex text-start flex-col justify-center mx-2 p-2">
            <p>Aside from "for great justice", "because I can" and "such was my destiny", mostly I made this to get a good grade.</p>
            <p>Hi, I'm a CS student, currently near the end of a React/Redux course. As you can probably guess, this project was a mandatory assignment:</p>
            <p><i>Make a React app with routing, at least 5 components, RTK, TypeScript, and external calls to an API.</i> Those random pics you see on this page? They're component 5.</p>
            </div>
            <ImageCard url="../src/assets/eagleUSAnew.png" imageText="This is a test of image cards!"/>
            </div>
        <div className="flex justify-center px-3 m-3">
            <ImageCard url="../src/assets/eagleUSAnew.png" imageText="This is technically a different image card!"/>
            <div className="flex text-start flex-col justify-center mx-2 p-2">
            <p>Notably, I was otherwise given complete creative freedom. <i>Big mistake.</i></p>
            <p>Sure, the API might be my own dinky hacked-together-in-5-minutes thing. Sure, this barely qualifies as fulfilling requirements.</p>
            <p>But "barely" is enough. And since I was planning on making this anyway, I can at least kill two birds with one large boulder the size of a small boulder.</p>
        </div>
        </div>
        <br></br>
        <h2>Wait so who are you?</h2>
        <div>
            <p>Honestly, I'm just some jackass from Denmark making random shit in my spare time. Don't think a bananas-to-big-macs converter really requires a huge signature on it.</p>
            <p>If you <i>do</i> wanna keep in touch tho, <a href="https://bsky.app/profile/mewnlightro.se">you can always follow me on Bluesky.</a></p>
            <p>Mostly I just make electronic music, so don't expect these kinds of web projects in the future.</p>
        </div>
        <br></br>
        <h2>This thing isn't like... political, is it?</h2>
        <div>
            <p>Not at all! Honestly, if any country had done something like this, I'd be poking fun at them instead.</p>
            <p>This site is entirely poking fun at dumb measures, and doesn't aim to reinforce any stereotypes about the US. Hell, most americans find those measurements stupid too.</p>
            </div>
            <br></br>
            <div>
            <details>
            <summary><h2>If you do want a bit of a political stance though...</h2></summary>
                <p>As much as this site provides some US clownery, nothing about the current political situation in the US is funny.</p>
                <p>I wish I could call the current administration something like "clowns" or "dumbasses", but honestly, "dangerously inept" is the best description I can come up with.</p>
                <p>I can say one thing about the one unelected official fucking up the US tho: Elon Musk can eat shit.</p>
            </details>
            </div>
    </div>
)

export default About