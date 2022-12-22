module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
    testMatch: ["<rootDir>/tests/**/*.(test).(ts|tsx)"],
    testPathIgnorePatterns: ["<rootDir>/tests/e2e/"],
    verbose: true,
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": [
            "@swc/jest",
            {
                sourceMaps: true,
                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true,
                    },
                    transform: {
                        react: {
                            runtime: "automatic",
                        },
                    },
                },
            },
        ],
    },
    moduleNameMapper: {
        "\\.svg$": "<rootDir>/tests/svg.mock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":"jest-transform-stub",
        "@components/(.*)": "<rootDir>/src/Components/$1",
        "@src/(.*)": "<rootDir>src/$1",
        "@tests/(.*)": "<rootDir>tests/$1",
        "@assets/(.*)": "<rootDir>src/Assets/$1",
        "@layout/(.*)": "<rootDir>src/Layout/$1",
        "@pages/(.*)": "<rootDir>src/Pages/$1",
        "@utils/(.*)": "<rootDir>src/Utils/$1",
    },
};