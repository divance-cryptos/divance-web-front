import livesData from '../data/lives/lives.json';

const liveService = () => {
    const getLives = async () => {
        console.log('ldata', livesData)
        return livesData.lives;
    }

    return {
        getLives,
    }
}

export default liveService;