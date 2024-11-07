import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'

export async function GET() {
  const todos = await prisma.todos.findMany();
  return NextResponse.json({ data: todos });
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  const result = await prisma.todos.create({ data });
  return NextResponse.json({ result });
}