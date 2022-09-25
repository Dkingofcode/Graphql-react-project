import { useQuery } from '@apollo/client';
import CharactersList from "./pages/CharactersList";


function App() {
   
   return (
        <div className="App">
           {/* <>
           <h3>{title}</h3>
           <img width="400" height="250" alt="album-reference" src={`${photo}`} />
           <br />
           <b>About this Album:</b>
           <p>{user}</p>
           <br />
           </> */}
          <CharactersList />
       </div>
   )          
 }

    // function DisplayAlbums() {
    //   const { loading, error, data }  = useQuery(GET_ALBUMS);

    //   if (loading) return <p>Loading ... </p>
    //   if (error) return <p>Error :(</p>;
    
    //   return data.albums.map(({ id, title, user, photo})  => (
    //     <div key={id}>
    //       <h3>{title}</h3>
    //       <img width="400" height="250" alt="album-reference" src={`${photo}`} />
    //       <br />
    //       <b>About this Album:</b>
    //       <p>{user}</p>
    //       <br />
    //     </div>
    //   ));
    // }


export default App;
