import carouselImage from '../../service/assets/carouselImage.js';

export default async (req, res, next) => {
    try {
        const imageName = req.query.name;
        const imageRequest = await carouselImage(imageName, res);
        return imageRequest;
    } catch (error) {
        return next(error);
    }
};
