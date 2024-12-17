// import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const movies = [
    {
        id : 1,
        tire : "Trust",
        description : "dire la verite",
        posterUrl : "",
        note : []
    }
];
function MovieCard({onAddMovie}) {
    // const navigate = useNavigate()
    const [data, setData] = useState({titre:"", description:"", posterUrl:"", note:[]});

    // useEffect(() => {
    //     const {data} = setData();
    //     return data;
    // },[data])

    const handleInputChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        
    }

    const enregistrerFilm = (e) => {
        e.preventDefault();
        onAddMovie(data);
        setData({titre:"", description:"", posterUrl:"", note:""});
    }
    return ( 
        <>
            <div>
                <form onSubmit={enregistrerFilm}>
                    <label>
                        Titre: <input type="text" name = "titre" value={data.titre} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Description: <input type="text" name="description" value={data.description}  onChange={handleInputChange}/>
                    </label>
                    <label>
                        PosteUrl: <input type="text" name="posterUrl" value={data.posterUrl} onChange={handleInputChange}/>
                    </label>
                    <label>
                        Note: <input type="number" name="note" value={data.note} onChange={handleInputChange}/>
                    </label>
                    <button type="submit">Enregistrer film</button>
                </form>
            </div>
        </>
     );
}

export default MovieCard;