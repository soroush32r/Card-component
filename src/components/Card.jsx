import { Image, Title, Description, Button } from "."

export const Card = ({ title, description, buttonsName }) => {
  return (
    <div className={`flex min-h-screen justify-center items-center`}>
      <div className="flex flex-col w-96 border border-grey-400 rounded-md shadow-md">
       
        <Image />

        <div className="p-4">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>

        <div className="flex justify-around">
          {buttonsName.map(({ name }) => (
            <Button>{name}</Button>
          ))}

        </div>
      </div>
    </div>
  )
}