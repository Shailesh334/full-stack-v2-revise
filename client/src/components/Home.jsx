import { useEffect } from "react"
import { useNavigate } from "react-router"


const Home = ({token , setToken}) => {
  const navigate = useNavigate()

useEffect(()=>{
  if (!token) {
      navigate("/register");
      return;
    }
}, [token , navigate])
  
  
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-wrap p-6">
     <div className="w-full max-w-sm rounded-xl border bg-white p-5 shadow-md">
      
      <h2 className="text-xl font-semibold text-gray-800">
        title
      </h2>

      <p className="mt-2 text-gray-600">
        description
      </p>

      <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        buttonText
      </button>

    </div>

     <div className="w-full max-w-sm rounded-xl border bg-white p-5 shadow-md">
      
      <h2 className="text-xl font-semibold text-gray-800">
        title
      </h2>

      <p className="mt-2 text-gray-600">
        description
      </p>

      <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        buttonText
      </button>

    </div>

     <div className="w-full max-w-sm rounded-xl border bg-white p-5 shadow-md">
      
      <h2 className="text-xl font-semibold text-gray-800">
        title
      </h2>

      <p className="mt-2 text-gray-600">
        description
      </p>

      <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        buttonText
      </button>

    </div>


     <div className="w-full max-w-sm rounded-xl border bg-white p-5 shadow-md">
      
      <h2 className="text-xl font-semibold text-gray-800">
        title
      </h2>

      <p className="mt-2 text-gray-600">
        description
      </p>

      <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        buttonText
      </button>

    </div>
    </div>
  )
}

export default Home
