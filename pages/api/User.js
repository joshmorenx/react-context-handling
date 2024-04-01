require ('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const Cat = mongoose.model('Cat', { name: String });

export default function handler(req, res) {
    if(req.method === 'POST') {
        const { name } = req.body;
        const kitty = new Cat({ name: name });
        kitty.save().then(() => console.log('meow'));
        return res.status(200).json({ name });
    }
}