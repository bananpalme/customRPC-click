var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/bananpalme/customRPC-click/tree/main', // Update to point to your repository  
        user: {
            name: 'Bananpalme', // update to use your name
            email: 'nigginz12@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)