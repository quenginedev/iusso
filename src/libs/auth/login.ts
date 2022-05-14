import { validateEmail } from './../../utils/validators';

const loginUser: any = (credentials: AuthLoginCredentials) => {
	const { email, password } = credentials
	if(!validateEmail(email)) throw new Error('Invalid email format')
	if(!password) throw new Error('Password required')
};
