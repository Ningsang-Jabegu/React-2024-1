import Youtube from "./Youtube"


function App() {
  const username = "ningsang"
  return (
    <>
      <h1>Vit react  {2+2}</h1>
      <h1>Vit react app {username}</h1>
      {/* <h1>Vit react app {if(username ===  "ningsang") ? "yes":"no"}</h1> */}
      <Youtube />
    </>
  )
}

export default App
