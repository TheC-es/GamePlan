'use server';

import { Sport, Day, Reservation } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Creates new reservation in the database.
 * @param info, an object containing the owner, team name, sport, day, time, and team number.
 */
export async function createReservation(info:
{ owner: string, team_name: string, sport: string, day: string, time: number, team_num: number }) {
  // change sport string to Sport enum
  let sport: Sport = 'Volleyball';
  if (info.sport === 'Basketball') {
    sport = 'Basketball';
  }
  // change day string to Day enum.
  // remember to use capital letter to start word.
  let day: Day = 'Monday';
  if (info.day === 'Tuesday') {
    day = 'Tuesday';
  } else if (info.day === 'Wednesday') {
    day = 'Wednesday';
  } else if (info.day === 'Thursday') {
    day = 'Thursday';
  } else if (info.day === 'Friday') {
    day = 'Friday';
  }
  await prisma.reservation.create({
    data: {
      owner: info.owner,
      team_name: info.team_name,
      sport,
      day,
      time: info.time,
      team_num: info.team_num,
    },
  });
  // redirect to the basketball schedule if reservation is for basketball.
  if (sport === 'Basketball') {
    redirect('/schedule');
  } else {
    // else redirect to the volleyball schedule.
    redirect('/schedule2');
  }
}

/**
 * Edits existing reservation in the database
 * @param reservation, the new, edited reservation object already fitting the schema
 * must have the ID of the reservation to change.
 * Works like the edit stuff function from template.
 */
export async function editReservation(reservation: Reservation) {
  await prisma.reservation.update({
    where: { id: reservation.id },
    data: {
      owner: reservation.owner,
      team_name: reservation.team_name,
      sport: reservation.sport,
      day: reservation.day,
      time: reservation.time,
      team_num: reservation.team_num,
    },
  });
  // redirect to the basketball schedule if reservation is for basketball.
  if (reservation.sport === 'Basketball') {
    redirect('/schedule');
  } else {
    // else redirect to the volleyball schedule.
    redirect('/schedule2');
  }
}

/**
 * Removes a reservation from the database
 * @param id, the ID of the reservation to remove.
 * Based on the removeStuff function from template.
 */
export async function deleteReservation(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.reservation.delete({
    where: { id },
  });
  // After deleting, redirect to the landing page.
  redirect('/');
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
