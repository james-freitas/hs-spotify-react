const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2


// rafce

// Arrow Function
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação de Componente
// PascalCase

// Nomeação de Variavel, Função..
// camelCase


// export default, posso importar com qualquer nome e sem chaves
// export "sem default" , só psso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header />


// Box model
// element.style {
//   background-color: antiquewhite;
//   padding: 20px;
//   margin: 20px;
//   border: solid 5px black;
//   /* box-sizing: content-box; */ 
//   width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header

// Nomes compostos são separados por -

// Tag vazia em React se chama Fragment ou Fragmento

// Coponentes recebem "props"

    //   {items === 5 ?
    //     <>
    //       <SingleItem />
    //       <SingleItem />
    //       <SingleItem />
    //       <SingleItem />
    //       <SingleItem />        
    //     </>
    //     :
    //     <>
    //     <SingleItem />
    //     <SingleItem />
    //     <SingleItem />
    //     <SingleItem /> 
    //     <SingleItem />
    //     <SingleItem />
    //     <SingleItem />
    //     <SingleItem /> 
    //     <SingleItem />
    //     <SingleItem /> 
    //     </>
    // }


    // {Array(items)
    //   .fill()
    //   .map((_currentValue, index) => (
    //     <SingleItem key={`${title}-${index}`} />
    //   ))} 

    // {artistArray
    //   .filter((_currentValue, index) => index < items)          
    //   .map((currObj, index) => (
    //     <SingleItem 
    //       id={currObj.id} 
    //       name={currObj.name} 
    //       image={currObj.image} 
    //       banner={currObj.banner} 
    //       key={`${title}-${index}`} 
    //     />
    //   ))} 

    // Spread operator
    // ...