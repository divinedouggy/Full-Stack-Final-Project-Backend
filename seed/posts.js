


const db = require('../db')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [
        // {title name url content}
        {title: 'Fiiirst', name:'ThatOneGuy', content:"I am soooo stoked to be the first commenter, boy am I special"},
        {title: 'Hiiii!!', name:'SpongeBob', url:'https://www.nick.com/shows/spongebob-squarepants', content:"Hi! I'm SpongeBob! DAAAAAHHHH"},
        {title: 'Hey its me soniq', name:'Sanic', url:'https://meme.fandom.com/wiki/Sanic_Hegehog', content:"gotta go fest"},
        {title:'Cool', name:'Jason', content:"Juss checkin in"}
    ]

    await Post.insertMany(posts)
    console.log("Created some posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()