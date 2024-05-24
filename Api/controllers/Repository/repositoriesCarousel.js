import dotenv from 'dotenv';
import getRepos from '../../service/repository/reposConsult.js';

dotenv.config();

export default async (req, res, next) => {
    try {
        const result = await getRepos();

        return res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
};
