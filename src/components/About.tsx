type Props = {
  buttonHandler: () => void
}

export const About = ({ buttonHandler }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">Im this and that</h1>
      <h2 className="text-3xl tracking-wider">you know...</h2>
      <div
        onClick={buttonHandler}
        className="group absolute top-0 right-0 w-1/6 h-full z-20 cursor-pointer"
      >
        <div className="absolute w-full h-full right-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out"></div>
        <button className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 ease-in hover:ease-out">
          HOME
        </button>
      </div>
    </div>
  )
}
