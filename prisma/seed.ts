/* eslint-disable no-await-in-loop */
import { PrismaClient, Role, Sport, Day } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => {
    const role = account.role as Role || Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
  });
  for (const reservation of config.defaultReservations) {
    console.log(`  Creating reservation for ${reservation.owner}`);
    await prisma.reservation.upsert({
      where: {
        // relies on uniqueness of owner, day, and time.
        owner_day_time: {
          owner: reservation.owner,
          day: reservation.day as Day,
          time: reservation.time,
        },
      },
      update: {},
      create: {
        owner: reservation.owner,
        team_name: reservation.team_name,
        sport: reservation.sport as Sport,
        day: reservation.day as Day,
        time: reservation.time,
        team_num: reservation.team_num,
        court: reservation.court,
      },
    });
  }
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
