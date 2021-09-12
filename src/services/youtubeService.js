import youtubesData from '../data/youtubeVideos/youtubes.json';

const youtubeService = () => {
    const getYoutubes = async () => {
        return youtubesData.youtubes;
    }

    return {
        getYoutubes,
    }
}

export default youtubeService;