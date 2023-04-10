import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, {AuthOptions} from "next-auth";
import prismadb from '@/lib/prismadb'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { compare } from 'bcrypt';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismadb),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'text'},
                password: {label: 'password', type: 'password'},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password required');
                }

                const user = await prismadb.user.findUnique({ where: {
                        email: credentials.email
                    }});

                if (!user || !user.hashedPassword) {
                    throw new Error('Email does not exist');
                }

                const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

                if (!isCorrectPassword) {
                    throw new Error('Incorrect password');
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);