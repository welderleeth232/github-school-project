import { generatePassword } from 'https://deno.land/x/pwgen@v1.0.0/mod.ts';

const password = generatePassword();
console.log(password);
