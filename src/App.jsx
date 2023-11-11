import { Image, Title } from "./components"

function App() {

  return (
    <div className={`flex min-h-screen justify-center items-center`}>
      <div className={'flex flex-col w-4/12 border-red-100'}>
        <Image />
        <Title>Lizard</Title>
      </div>
    </div>
  )
}

export default App
