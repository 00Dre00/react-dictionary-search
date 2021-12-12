import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
let[keyword, setKeyword] = useState(props.defaultKeyword);
let[results, setResults] = useState(null);
let[loaded, setLoaded] = useState(false);
let[photos, setPhotos]= useState([]);

function handleImages(response){
    setPhotos(response.data.photos);}

function handleResponse(response){
    setResults(response.data[0]);
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let pexelsApiKey="563492ad6f91700001000001c41dbc39f0fe42a2a5788fe27e52aa83";
    axios
    .get(pexelsApiUrl, {headers:{ Authorization: `Bearer ${pexelsApiKey}`}})
    .then(handleImages);
}

function search(){
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if (loaded){
return(
    <div className="Dictionary">
        <section>
            <h1> Search for a word</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="search"
            autoFocus={true}
            placeholder="Search for a word"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
            />
        </form>
        </section>
        <Results results={results}/>
    </div>
);}
else{
    load();
    return "Loading";
}}

