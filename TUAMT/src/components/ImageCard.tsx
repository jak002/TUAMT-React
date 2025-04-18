function ImageCard(props: {url: string, imageText: string}) {
    return <div className="flex flex-col md:max-w-1/2 justify-center bg-white shadow-lg rounded-2xl h-min">
        <img src={props.url} className="w-auto p-3 pb-0"/>
        <p className="italic">{props.imageText}</p>
    </div>
}

export default ImageCard