let wpUrl = 'http://localhost:8080/wp-json';

// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
    wpUrl = 'http://wp-headless/wp-json';
}

export const Config = { apiUrl: wpUrl };
