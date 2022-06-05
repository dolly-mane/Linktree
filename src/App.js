import "./App.css";
import Card from "./Card"; 
import Imgbio from "./bio.png";

function App() {
  const data = [
    {
      title:"github",
      username:"dolly-mane",
      tagline:" Follow me on GitHub to know more about me.",
      link: "https://github.com/dolly-mane"
    },
    {
      title:"linkdin",
      username:"dolly-mane",
      tagline:" Follow me on Linkdin to know more about me.",
      link:"https://www.linkedin.com/in/dolly-mane/"
    }

  ];

  return (
    <div className="head-container">
      <h3 className="title">LinkTree</h3>
      <div className='photo-id'>
        <img src={Imgbio} className="photo"/>
        <h2>
          Hi I am Dolly Mane
        </h2>
       </div>
      
      {
        data.map ((cardinfo) => {

           return (
            <Card 
              title={cardinfo.title}
              username={cardinfo.username}
              tagline={cardinfo.tagline}
              link={cardinfo.link}
            />
           );
        })
      }
      
       
        
    </div>
  );
}

export default App;
