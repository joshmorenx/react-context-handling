import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetHola() {
    const [holalium, setHola] = useState('')
    const fetcher = async () => {
        try {
            const response = await axios.post('/api/User', { name: 'Joshua' })
            setHola(response.data.name)
        } catch (error) {
            console.log(error)
        }
    }
    return {
        holalium,
        fetcher
    }
}
