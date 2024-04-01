import Image from "next/image";
import useGetHola from "@/hooks/useGetHola";
import useSetHola from "@/hooks/useSetHola";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import AppContext from '@/contexts/AppContext';
export default function Home() {
  const { data, setData } = useContext(AppContext);



  let router = useRouter();
  let hola = useGetHola();
  let { holalium, fetcher } = useSetHola();
  let enrutado = () => {
    // return <About/>
    setData({ tiktoken: 'secreto', namek: 'Usuario' });
    router.push('/about');
  }

  let sendForm = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
    let formData = new FormData(event.target);
    let user = formData.get('user');
    let pass = formData.get('pass');
    document.write(`username: ${user}, password: ${pass}`);
  }

  return (
    <main>
      <p>{ hola }</p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={ fetcher }>Click me</button>
      <h1>{ holalium }</h1>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={ enrutado }>About</button>

      <form onSubmit={sendForm} method="GET">
        <input type="text" name="user" placeholder="Username"/>
        <br/>
        <input type="text" name="pass" placeholder="Password"/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
