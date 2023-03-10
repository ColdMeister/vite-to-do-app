import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';
import path from "path";


export default ({ mode }) => {
    let processEnv: any = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [react()],

        server: {
            port: processEnv.VITE_PORT,
        },
        resolve: {
            alias: {
                "@project": path.resolve(
                    __dirname,
                    "src/Components/"
                ),
                "@buttons": path.resolve(
                    __dirname,
                    "src/Components/Button/"
                ),
                "@configs": path.resolve(
                    __dirname,
                    "src/Components/Configs/"
                ),
            },
        },
    });
}

