#!/usr/bin/env -S deno run -A

import { fromFileUrl , dirname , join } from 'Path'
import { parse as parseEnv , stringify } from 'DotEnv'
import { parse as parseYaml } from 'Yaml'


const { url } = import.meta;

const file = fromFileUrl(url)
const folder = join(dirname(file),'..')

const path_config = join(folder,'Config.yaml')
const path_env = join(folder,'.env')

const text_config = await Deno.readTextFile(path_config);
let text_env = await Deno.readTextFile(path_env);


const config = parseYaml(text_config);
const env = parseEnv(text_env);

env.Config = JSON
    .stringify(config)

text_env = stringify(env);

await Deno.writeTextFile(path_env,text_env)


console.log(`Updated '.config/.env' from '.config/Config.yaml'`)
