import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import employeeSchema from "@/lib/validation";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const validatedData = employeeSchema.parse(json);

    const newEmployee = await prisma.employee.create({
      data: validatedData,
    });

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const sortOrder = searchParams.get("sortOrder") === "desc" ? "desc" : "asc";
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const search = searchParams.get("search") || "";

  const employees = await prisma.employee.findMany({
    where: {
      OR: [
        { firstName: { contains: search } },
        { lastName: { contains: search } },
        { position: { contains: search } },
        { phone: { contains: search } },
        { email: { contains: search } },
      ],
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const totalEmployees = await prisma.employee.count({
    where: {
      OR: [
        { firstName: { contains: search } },
        { lastName: { contains: search } },
        { position: { contains: search } },
        { phone: { contains: search } },
        { email: { contains: search } },
      ],
    },
  });

  return NextResponse.json({ employees, totalEmployees, page, pageSize });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const employeeId = parseInt(params.id, 10);

  if (isNaN(employeeId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const deletedEmployee = await prisma.employee.delete({
      where: { id: employeeId },
    });

    return NextResponse.json(deletedEmployee, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Employee not found" },
          { status: 404 }
        );
      }
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const employeeId = parseInt(params.id, 10);

  let updatedData: any;
  try {
    updatedData = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (isNaN(employeeId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const validatedData = employeeSchema.parse(updatedData);
    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeId },
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        position: validatedData.position,
        phone: validatedData.phone,
        email: validatedData.email,
      },
    });

    return NextResponse.json(updatedEmployee, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
