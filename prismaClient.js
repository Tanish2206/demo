// prismaClient.js
const { PrismaClient } = require('@prisma/client');

// Create an instance of Prisma client
export const prisma = global.prisma||new PrismaClient({
    log:['query'],
})

if (process.env.NODE_ENV!=='production') global.prisma=prisma
