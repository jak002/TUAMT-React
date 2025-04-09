function ImageCard(props: {url: string, imageText: string}) {
    return <div className="flex-row max-w-1/2 bg-white shadow-lg rounded-2xl h-min">
        <img src={props.url} className="w-auto"/>
        <p className="italic">{props.imageText}</p>
    </div>
}

export default ImageCard