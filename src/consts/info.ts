import crytoappNext from '../../public/images/cryptoapp_nextjs.jpg';
import crytoappReact from '../../public/images/cryptoapp_reactjs.jpg';
import todolistReact from '../../public/images/todolist_reactjs.jpg';

const data = {
  name: 'Diana Gomes',
  role: 'Software Developer',
  socialMedia: {
    gitHub: 'https://github.com/diana-gomes30',
    linkedin: 'https://www.linkedin.com/in/diana-gomes-90b8a1196/',
  },
  aboutme: `I'm Diana, a Software Developer. I like to learn about new technologies and I'm more interested in Frontend and Mobile. In my free time, I like to play games, listen to music and hang out with my friends.`,
  email: 'diana.fp.gomes@gmail.com',
  address: 'Leiria, Portugal',
  nationality: 'Portuguese',
  skills:
    'JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, HTML, CSS, SQL, C#, .Net Framework, Flutter',
  projects: [
    {
      id: 1,
      imagePath: todolistReact,
      name: 'ToDo List',
      skills: 'React.js | CSS',
      description:
        'This is a simple app that allows us to create, update, mark as done and delete tasks. Tasks are stored in local storage.',
      gitHubLink: 'https://github.com/diana-gomes30/react_todolist',
      liveLink: 'https://master--steady-bunny-76f340.netlify.app/',
    },
    {
      id: 2,
      imagePath: crytoappReact,
      name: 'CryptoApp',
      skills: 'React.js | TypeScript | CSS',
      description:
        'This app uses the CoinGecko API to show cryptocurrency data including rank, name, price, 24h volume, market cap and price change percentage in 1h, 24h, 7d. The app also has some features, one for searching and another for adding coins to the watchlist by saving them in local storage.',
      gitHubLink: 'https://github.com/diana-gomes30/react_crypto_app',
      liveLink: 'https://react-crypto-app-psi-lemon.vercel.app/',
    },
    {
      id: 3,
      imagePath: crytoappNext,
      name: 'CryptoApp',
      skills: 'Next.js | TypeScript | Tailwind CSS | Storybook',
      tests: 'Cypress | Jest | Testing Library',
      description:
        'This app is similar to CryptoApp in react.js. However, it has pagination feature, a cryptocurrency details page and watchlist cryptocurrencies are stored in an external database. In this app, some unit tests and some end-to-end tests were also done.',
      gitHubLink: 'https://github.com/diana-gomes30/nextjs_crypto_app',
      liveLink: 'https://nextjs-crypto-app-gamma.vercel.app/',
    },
  ],
};

export default data;
