/* eslint-disable @typescript-eslint/no-unused-vars */
import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function POST(req: Request) {
  const { date, duration } = await req.json();

  const startOfDay = new Date(`${date}T00:00:00.000Z`);
  const endOfDay = new Date(`${date}T23:59:59.999Z`);

  // ✅ Load credentials based on environment
  let credentials;
  if (process.env.NODE_ENV === 'production') {
    credentials = {
      client_email: process.env.GOOGLE_CLIENT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    };
  } else {
    const keyPath = path.join(process.cwd(), 'app/api/calendar/availability/google-service-account.json');
    credentials = JSON.parse(await fs.readFile(keyPath, 'utf8'));
  }

  // ✅ Authenticate
  const jwtClient = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  const calendar = google.calendar({ version: 'v3', auth: jwtClient });

  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  try {
    const response = await calendar.events.list({
      calendarId: calendarId!,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const bookedEvents = (response.data.items || []).map((event) => ({
      start: event.start?.dateTime,
      end: event.end?.dateTime,
    }));

    return NextResponse.json({ bookedEvents });
  } catch (error) {
    console.error('Google Calendar API error:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}