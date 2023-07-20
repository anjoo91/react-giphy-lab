export default function GiphyInfo({giphy}) {
    return (
        <div className="giphy-info">
            <img src={giphy.images.fixed_height.url} alt={giphy.title}/>
        </div>
    );
};