import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.APP_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

prisma.$connect()
    .then(() => {
        console.log('Connected to the database successfully');
    })
    .catch((error) => {
        console.error('Failed to connect to the database', error);
    });
export default prisma