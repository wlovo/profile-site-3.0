import next from 'eslint-config-next';

// eslint-config-next@16 ships a flat config array directly; spread it and add
// project ignores. (Replaces the FlatCompat wrapper, which throws under ESLint 9.)
const config = [...next, { ignores: ['.next/**'] }];

export default config;
