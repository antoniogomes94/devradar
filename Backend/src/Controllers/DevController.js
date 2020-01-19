const axios = require('axios');
const Dev = require('../Models/Dev');
const parseStringAsArray =  require('../Utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username});

        if(!dev)
        {
            const apiresponse = await axios.get(`http://api.github.com/users/${github_username}`);
            const {name = login, avatar_url, bio} = apiresponse.data;
        
            const techsArray = parseStringAsArray(techs);//Quebra as strings em um vetor e remove os espaços
        
            const location = 
            {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create(
            {
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,  
            })
        }

        //console.log(name, avatar_url, bio, github_username);
        return response.json(dev);
    },
    async update()
    {

    },
    async destroy()
    {

    },
};