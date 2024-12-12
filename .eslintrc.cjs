module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'astro'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended',
    ],
    rules: {
        // Reglas de ESLint
        "no-console": "warn", // Advertencia al usar console.log
        "no-unused-vars": "warn", // Advertencia para variables no usadas
        "eqeqeq": ["error", "always"], // Requiere el uso de === y !==
        "curly": "error", // Requiere el uso de llaves en bloques

        // Reglas de @typescript-eslint
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Ignora variables de argumentos que empiezan con _
        "@typescript-eslint/explicit-function-return-type": "off", // No requiere tipos de retorno explícitos en funciones
        "@typescript-eslint/no-explicit-any": "warn", // Advertencia al usar el tipo any
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Prefiere el uso de interfaces sobre types

        // Reglas de React
        "react/prop-types": "off", // Desactiva la validación de prop-types (usualmente no se usa con TypeScript)
        "react/jsx-boolean-value": ["error", "always"], // Requiere valores booleanos explícitos en JSX

        // Reglas de React Hooks
        "react-hooks/rules-of-hooks": "error", // Verifica las reglas de los hooks
        "react-hooks/exhaustive-deps": "warn", // Verifica las dependencias de los efectos

        // Reglas de JSX a11y (accesibilidad)
        "jsx-a11y/anchor-is-valid": "warn", // Advertencia para enlaces no válidos
        "jsx-a11y/alt-text": "warn", // Advertencia para imágenes sin texto alternativo

        // Reglas de Prettier
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "semi": false,
                "trailingComma": "es5"
            }
        ]
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
    ],
};