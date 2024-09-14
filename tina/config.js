import { UsernamePasswordAuthJSProvider as UsernamePasswordAuthJSProvider, TinaUserCollection as TinaUserCollection } from "tinacms-authjs/dist/tinacms";
import { defineConfig as defineConfig, LocalAuthProvider as LocalAuthProvider } from "tinacms";
import { PageCollection } from "./collections/page";
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
export default defineConfig({
    authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
    contentApiUrlOverride: "/api/tina/gql",
    build: {
        publicFolder: "public",
        outputFolder: "admin",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
            static: true,
        },
    },
    schema: {
        collections: [TinaUserCollection, PageCollection],
    }
});
