import { Card } from "./components"

function App() {
  
  const title = "Lizard";
  const description = "Chevrolet is an iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.";
  const buttonsName = [ 
    {name: 'SHARE'},
    {name: 'LEARN MORE'}
  ];

  return (
    <Card title={title} description={description} buttonsName={buttonsName} />
  )
}

export default App
