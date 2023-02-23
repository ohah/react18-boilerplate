import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    roots: ['rootDir'],
    rootDir: './',
    testMatch: ['**/__test__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          diagnostices: {
            ignoreCodes: [1343],
          },
          astTransformers: {
            before: [
              {
                path: 'node_modeuls/ts-jest-mock-import-meta',
                options: {
                  metaObjectReplacement: {
                    url: __dirname,
                    env: {
                      ...process.env,
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
    modulePaths: ['./src'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
      '^(\\.{1,2}/.*)\\.(ts|tsx)$': '$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
  };
};
