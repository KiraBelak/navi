import { useState } from "react"
import Header from "@/components/Header"
import { Badge, BadgeDelta } from "@tremor/react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";


export default function Home() {
  const [number, setNumber] = useState(50)
  const [text, setText] = useState("")

  const notify = () => {
    toast.loading("Preguntando a Kirakid...");
    axios.post("/api/openai", { prompt: text }).then((res) => {
      console.log(res.data)
      toast.dismiss();
      toast.success("Kirakid dice: " + res.data.choices[0].text);
    }).catch((err) => {
      console.log(err)
      toast.dismiss();
      toast.error("Error al preguntar a Kirakid");
    })

  }

  return (
    //html de la pagina
    <>
      <Toaster position="bottom-center" />
    <main className="bg-gray-800 w-screen h-screen">
      <Header>
        hola
      </Header>
      <input type="text" className="w-full text-black" placeholder="Escribe algo" onChange={(e) => setText(e.target.value)} />
      <button onClick={notify}>Preguntar !</button>
      <h1 className="text-4xl text-[#106d21]">Hola Kirakid</h1>
      {number === 1 ? <p>Es uno</p> : <p>No es uno</p>}

      <button
        className="bg-[#106d21] text-white px-4 py-2 rounded-md"
        onClick={() => setNumber(number + 1)}
      >
        Sumar
      </button>
      <div className="flex justify-center flex-col items-center w-screen">
      <Badge size="xs">live</Badge>
      <BadgeDelta deltaType="decrease">text</BadgeDelta>


      </div>

      <p className="text-white">{number}</p>


    </main>
    </>
  )
}
