import { PrismaClient } from '../generated/prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const globalForPrisma = globalThis as unknown as { prisma: InstanceType<typeof PrismaClient> | undefined }

export function getPrisma() {
  if (!globalForPrisma.prisma) {
    const adapter = new PrismaMariaDb(process.env.DATABASE_URL!)
    globalForPrisma.prisma = new PrismaClient({ adapter })
  }
  return globalForPrisma.prisma
}
