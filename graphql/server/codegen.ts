import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema.ts",
    generates: {
        "./src/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: './context#ContextTypeCustom',
                mappers: {
                    Author: './models#AuthorModel',
                    Track: './models#TrackModel',
                }
            }
        },
    },
};

export default config;