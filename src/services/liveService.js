import livesData from '../data/lives/lives.json';

const liveService = () => {
    const getLives = async () => {
        return livesData.lives;
    }

    return {
        getLives,
    }
}

export default liveService;