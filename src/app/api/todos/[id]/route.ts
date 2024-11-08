import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';

// GET - Returns a single record
export async function GET(req: NextApiRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const result = await prisma.todos.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({data: result});
}

// PUT - Updates a single record
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await req.json();
  console.log(data);
  const result = await prisma.todos.update({ 
    data,
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({ status: "OK" });
}