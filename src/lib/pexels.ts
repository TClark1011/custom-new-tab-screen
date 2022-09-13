import { env } from '$env/dynamic/private';
import { createClient } from 'pexels';

const pexels = createClient(env.API_KEY);

export default pexels;
