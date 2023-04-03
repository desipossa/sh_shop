import { Link, useSearchParams } from "react-router-dom";

const SearchResult = ({ shopData }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get('q') || '';
    const searchResult = shopData.filter(it =>
        it.name.toUpperCase().includes(r.toUpperCase())
        || it.description?.toUpperCase().includes(r.toUpperCase()));
    console.log(searchResult);
    return (
        <div className="SearchResult">
            <div className="CateList">
                <strong className="CateTit">
                    {
                        searchResult.length === 0
                            ? <div>제품이 없습니다.</div>
                            : <div>{searchResult.length}의 제품이 있습니다.</div>
                    }
                </strong>
                <ul className="list">
                    {
                        searchResult.map((it, idx) => {
                            return (
                                <li key={it.id} className="itm">
                                    <Link to={`/detail/${it.id}`}>
                                        <figure className="imgCase">
                                            <img src={it.api_featured_image}
                                                onError={e => e.target.src = `${process.env.PUBLIC_URL}/image/missing_img.jpg`} alt="" />
                                        </figure>
                                        <strong>{it.name}</strong>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchResult;