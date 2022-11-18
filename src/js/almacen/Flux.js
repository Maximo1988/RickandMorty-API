

const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {demo: [{
            title: "FIRST",
            background: "white",
            initial: "white",
          },
          {
            title: "SECOND",
            background: "white",
            initial: "white",
          },
        ],
        personajes: [],
        personaje: [],
        locaciones: [],
        locacion: [],
        episodios: [],
        episodio: [],
        favorito: [],
      },
  
      actions: {
        // Use getActions to call a function within a fuction
        exampleFunction: () => {
          getActions().changeColor(0, "green");
        },
        loadSomeData: () => {
          /**
                      fetch().then().then(data => setStore({ "foo": data.bar }))
                  */
        },
  
        ObtenerPersonajes: () => {
          fetch("https://rickandmortyapi.com/api/character/")
            .then((res) => res.json())
            .then((response) => {
              setStore({ personajes: data.results });
            })
            .catch(console.error());
        },
  
        ObtenerLocacion: () => {
          fetch("https://rickandmortyapi.com/api/location/")
            .then((res) => res.json())
            .then((response) => {
              setStore({ locaciones: data.results });
            })
            .catch(console.error());
        },
  
        ObtenerEpisodios: () => {
          fetch("https://rickandmortyapi.com/api/episode/")
            .then((res) => res.json())
            .then((response) => {
              setStore({ episodios: data.results });
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
          console.log("funciona");
        },
  
        changeColor: (index, color) => {
          //get the store
          const store = getStore();
  
          //we have to loop the entire demo array to look for the respective index
          //and change its color
          const demo = store.demo.map((elm, i) => {
            if (i === index) elm.background = color;
            return elm;
          });
  
          //reset the global store
          setStore({ demo: demo });
        },
        getCharacter: id => {
                  const store = getStore();
                  fetch("https://rickandmortyapi.com/api/character/" + id)
                      .then(res => res.json())
                      .then(data => {
                          setStore({personaje: data.result });
                      })
                      .catch(err => err);
              },
        getLocation: id => {
                  const store = getStore();
                  fetch("https://rickandmortyapi.com/api/location/" + id)
                      .then(res => res.json())
                      .then(data => {
                          setStore({locacion: data.result });
              console.log(data.result);
                      })
                      .catch(err => err);
              },
        getEpisode: id => {
                  const store = getStore();
                  fetch("https://rickandmortyapi.com/api/episode/" + id)
                      .then(res => res.json())
                      .then(data => {
                          setStore({episodio: data.result });
                      })
                      .catch(err => err);
              },
      },
    };
  };
  
  export default getState;
  