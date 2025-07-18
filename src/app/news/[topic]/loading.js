import { ScaleLoader } from "react-spinners"


function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <ScaleLoader color="black" />
    </div>
  )
}

export default Loading