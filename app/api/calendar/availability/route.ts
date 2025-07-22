import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { calendar_v3 } from 'googleapis';

const calendar = google.calendar({ version: 'v3' });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { date, duration } = body;

    const calendarId = process.env.GOOGLE_CALENDAR_ID!;
    const apiKey = process.env.GOOGLE_API_KEY!;

    const startOfDay = new Date(`${date}T00:00:00Z`);
    const endOfDay = new Date(`${date}T23:59:59Z`);

    const eventsRes = await calendar.events.list({
      calendarId,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      auth: apiKey,
    });

    const events = eventsRes.data.items || [];

    const busyTimes: { start: Date; end: Date }[] = events.map((event: calendar_v3.Schema$Event) => ({
      start: new Date(event.start?.dateTime || ''),
      end: new Date(event.end?.dateTime || ''),
    }));

    const slots: string[] = [];
    const startHour = 9;
    const endHour = 17;
    const interval = 15; // minutes

    const day = new Date(date);
    for (let hour = startHour; hour < endHour; hour++) {
      for (let min = 0; min < 60; min += interval) {
        const start = new Date(day);
        start.setHours(hour, min, 0, 0);
        const end = new Date(start.getTime() + duration * 60000);

        const isConflicting = busyTimes.some((busy) =>
          start < busy.end && end > busy.start
        );

        if (!isConflicting) {
          slots.push(
            start.toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })
          );
        }
      }
    }

    return NextResponse.json({ slots });
  } catch (err) {
    console.error('Calendar API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}