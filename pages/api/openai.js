import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const model = "text-davinci-002"

const headers = {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
    }

export default async function handler(req, res) {
    // const { prompt } = req.body
    const prompt = "Hola, soy Kirakid, muestrame los mejores lenguajes de programacion.?"
    const data = {
        "prompt": prompt,
        "max_tokens": 1000,
        "temperature": 0.9,
        "top_p": 1,
        "stop": null
    }
    try {
        const response = await axios.post(`https://api.openai.com/v1/engines/${model}/completions`, data, { headers: headers })
        console.log(response.data)
        res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
}