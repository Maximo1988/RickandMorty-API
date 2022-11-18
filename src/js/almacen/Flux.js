
const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {

        personajes: [],
        personaje: [],
        locaciones: [],
        locacion: [],
        episodios: [],
        episodio: [],
        favorito: [],

      },
  
      actions: {
        
        ObtenerPersonajes: () => {
          fetch("https://rickandmortyapi.com/api/character/")
            .then((res) => res.json())
            .then((response) => {
              setStore({personaje: response.results });
            })
            .catch(console.error());
        },
  
        ObtenerLocacion: () => {
          fetch("https://rickandmortyapi.com/api/location/")
            .then((res) => res.json())
            .then((response) => {
              setStore({locacion: response.results });
            })
            .catch(console.error());
        },
  
        ObtenerEpisodios: () => {
          fetch("https://rickandmortyapi.com/api/episode/")
            .then((res) => res.json())
            .then((response) => {
              setStore({episodio: response.results });
            })
            .catch(console.error());
        },
  
        AgregarFavorito:(fav)=>{
          let copyFavorito = getStore().favorito
          copyFavorito.push(fav)
          setStore({favorito:copyFavorito})
        },
  
        EliminarFavorito:(i)=>{
          setStore({favorito: getStore().favorito.filter(
            (item, index) => index !== i)})
        },

        },
        
        getCharacter: id => {
                  const store = getStore();
                  fetch("https://rickandmortyapi.com/api/character/" + id)
                      .then(res => res.json())
                      .then(data => {
                          setStore({personaje: data.results });
                      })
                      .catch(err => err);
              },
        getLocation: id => {
                  const store = getStore();
                  fetch("https://rickandmortyapi.com/api/location/" + id)
                      .then(res => res.json())
                      .then(data => {
                          setStore({locacion: data.results });
                      })
                      .catch(err => err);
              },
        getEpisode: id => {
                  const store = getStore();
                  fetch("https://rickandmortyapi.com/api/episode/" + id)
                      .then(res => res.json())
                      .then(data => {
                          setStore({episodio: data.results });
                      })
                      .catch(err => err);
              },
      };
    };
  
  export default getState;
  