/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'jest';

const dotenv = require('dotenv');

export default async (): Promise<Config> => {
  return {
    roots: ['<rootDir>'],
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
                path: 'node_modules/ts-jest-mock-import-meta',
                options: {
                  metaObjectReplacement: {
                    url: __dirname,
                    env: {
                      ...dotenv.config({ path: 'env.test' }).parsed,
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
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
  };
};
