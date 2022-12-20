module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    rules: {
        quotes: ["error", "single"]
    },
    parserOptions: {
        project: './tsconfig.json'
    }
}