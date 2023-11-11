import { Image, Title, Description, Button } from "./components"

function App() {

  return (
    <div className={`flex min-h-screen justify-center items-center`}>
      <div className={'flex flex-col w-96 border border-grey-400 rounded-md shadow-md'}>
        <Image />
        <div className="p-4">
          <Title>Lizard</Title>
          <Description>	Chevrolet is an iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.</Description>
        </div>
        <div className="flex justify-around">
          <Button>SHARE</Button>
          <Button>LEARN MORE</Button>
        </div>
      </div>
    </div>
  )
}

export default App
