import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'

// GET - Returns all records
export async function GET() {
  const todos = await prisma.todos.findMany({
    where: {
      completed: "0"
    },
    orderBy: {
      id: 'asc',
    },
  });
  return NextResponse.json({ data: todos });
}

// POST - Creates a new record
export async function POST(req: Request) {
  const data = await req.json();
  const result = await prisma.todos.create({ data });
  return NextResponse.json({ result });
}