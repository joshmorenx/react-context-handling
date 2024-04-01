import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetHola() {
    const [hola, setHola] = useState('')
    useEffect(() => {
        const fetcher = async () => {
            try {
                const response = await axios.get('/api/hello')
                setHola(response.data.name)
            } catch (error) {
                console.log(error)
            }
        }
        fetcher()
    }, [])
    return hola
}