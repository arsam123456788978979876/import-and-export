export default function MovieList(props){
    return props.data.map(function(movie , total){
       return  <div key={total}>
            <a href={movie.link}><img src={moviegot .imageUrl}/><h3>{movie.name}</h3></a>
        </div>
    })
 }