import { PrismaClient } from '@prisma/client';

//prevent Prisma for rerunning to many times when page refreshes
const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;