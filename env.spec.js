import dotenv from 'dotenv';
dotenv.config({ path: './.env.staging' });

let env = process.env.hello;
console.log(env);
