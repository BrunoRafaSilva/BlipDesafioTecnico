import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

export default async (imageName, res) => {
    try {
        const filename = fileURLToPath(import.meta.url);
        const pathName = dirname(filename);
        const imagePath = resolve(pathName, `../../assets/images/carousel/${imageName}.png`);

        const result = fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.status(404).json({ ok: false, message: 'Imagem não encontrada!' });
                return;
            }

            res.contentType('image/png');
            res.send(data);
        });

        return result;
    } catch (err) { throw err.message; }
};
