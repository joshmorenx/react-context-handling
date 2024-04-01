import AppContext from '@/contexts/AppContext';
import { useState, useContext } from "react";
export default function About() {
  const { data } = useContext(AppContext);
  return (
    <main>
      
      <p className='text-3xl font-bold'> holax { data.namek }, token { data.tiktoken }</p>
    </main>
  );
}