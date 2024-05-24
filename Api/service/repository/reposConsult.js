import sortOrderDate from '../../utils/sortOrderDate.js';
import filterParams from '../../utils/filterParams.js';
import mapPropertys from '../../utils/mapPropertys.js';

const URL = 'https://api.github.com/orgs/takenet/repos';
const avatarUrl = 'https://avatars.githubusercontent.com/u/4369522?v=4';

const getRepos = async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };
        const response = await fetch(URL, requestOptions);
        const data = await response.json();
        const filtredData = data
            .filter(filterParams('language', 'C#'))
            .sort(sortOrderDate('created_at'))
            .slice(0, 5)
            .map(mapPropertys('full_name', 'description', 'created_at', 'language', 'svn_url'));
        const objCarousel = {};
        objCarousel.itemType = 'application/vnd.lime.document-select+json';
        objCarousel.items = [];
        for (let i = 0; i < filtredData.length; i += 1) {
            const repository = filtredData[i];
            const objectCarousel = {
                header: {
                    type: 'application/vnd.lime.media-link+json',
                    value: {
                        title: repository.full_name,
                        text: repository.description,
                        type: 'image/jpeg',
                        uri: avatarUrl,
                    },
                },
                options: [
                    {
                        label: {
                            type: 'application/vnd.lime.web-link+json',
                            value: {
                                title: 'Visitar Repositório',
                                uri: repository.svn_url,
                            },
                        },
                    },
                ],

            };
            objCarousel.items.push(objectCarousel);
        }

        return objCarousel;
    } catch (err) {
        throw err.message;
    }
};

export default getRepos;
