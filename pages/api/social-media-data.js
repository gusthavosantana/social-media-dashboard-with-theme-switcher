// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({
        general: [
            { id: 1, socialMedia: 'facebook', profile: '@nathanf', value: 1987, type: 'Followers', today: 12 },
            { id: 2, socialMedia: 'twitter', profile: '@nathanf', value: 1044, type: 'Followers', today: 99 },
            { id: 3, socialMedia: 'instagram', profile: '@realnathanf', value: 11000, type: 'Followers', today: 1090 },
            { id: 4, socialMedia: 'youtube', profile: 'Nathan F.', value: 8239, type: 'Subscribers', today: -144 },
        ],
        today: [{
                id: 1,
                value: 87,
                variation: 3,
                metric: 'Page Views',
                socialMedia: 'facebook'
            },
            {
                id: 2,
                value: 52,
                variation: -2,
                metric: 'Likes',
                socialMedia: 'facebook'
            },
            {
                id: 3,
                value: 5432,
                variation: 2257,
                metric: 'Likes',
                socialMedia: 'instagram'
            },
            {
                id: 4,
                value: 5200,
                variation: 1324,
                metric: 'Profile Views',
                socialMedia: 'instagram'
            },
            {
                id: 5,
                value: 117,
                variation: 303,
                metric: 'Retweets',
                socialMedia: 'twitter'
            },
            {
                id: 6,
                value: 507,
                variation: 553,
                metric: 'Likes',
                socialMedia: 'twitter'
            },
            {
                id: 7,
                value: 107,
                variation: -19,
                metric: 'Likes',
                socialMedia: 'youtube'
            },
            {
                id: 8,
                value: 1407,
                variation: -12,
                metric: 'Total Views',
                socialMedia: 'youtube'
            },
        ]
    })
}