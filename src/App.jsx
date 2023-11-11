import { Image, Title, Description } from "./components"

function App() {

  return (
    <div className={`flex min-h-screen justify-center items-center`}>
      <div className={'flex flex-col w-4/12 border border-grey-400 rounded-md shadow-md'}>
        <Image />
        <div className="p-4">
          <Title>Lizard</Title>
          <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo facilis earum sint delectus officia reiciendis vero, dolore in ipsam nulla aspernatur voluptatum rerum perferendis soluta incidunt totam ratione? At, soluta.</Description>
        </div>
      </div>
    </div>
  )
}

export default App
