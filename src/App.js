
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
// const app_id ="your app id";
// const app_key ="your app key";
// if api need an app id and app key then use above code

const api_url = "https://dog.ceo/api/breeds/image/random/3";

  let [dogImage, setDogImage] = useState(null)

    // 3. Create out useEffect function
  useEffect(() => {
    fetchApi();
  },[])

  const fetchApi = ()=>{
    fetch(api_url)
    .then(response => response.json())
        // 4. By setting *dogImage* to the image url that we received from this response, we should be able to display the image.
    .then(data => setDogImage(data.message))
  }

  return (
    <div className='dispaly'>
        {/* 5. Each url is returned as an img element, with the value of our src set to the url that contains the image */}
    {dogImage && dogImage.map((dog) => <img width={"250px"} height={"200px"} src={dog}></img>)}
    </div>
  );
}

export default App;
