import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function seed() {
  // Seed Role
  const Role = await prisma.role.createMany({
    data: [{ name: "SUPER_ADMIN" }, { name: "HR_ADMIN" }, { name: "EMPLOYEE" }],
  });

  console.log("Role: ", Role);

  // Seed Positions
  const Positions = await prisma.position.createMany({
    data: [
      { title: "CEO" },
      { title: "HRD" },
      { title: "Front-End Developer" },
      { title: "Back-End Developer" },
      { title: "Full-Stack Developer" },
      { title: "IT Support" },
      { title: "Project Manager" },
      { title: "Marketing" },
      { title: "Sales" },
      { title: "Customer Service" },
    ],
  });

  console.log("Positions: ", Positions);

  // Seed Work Place
  const WorkPlace = await prisma.workPlace.createMany({
    data: [
      { place: "Bandung" },
      { place: "Jakarta" },
      { place: "Surabaya" },
      { place: "Semarang" },
      { place: "Yogyakarta" },
    ],
  });

  console.log("WorkPlace: ", WorkPlace);

  // Seed Users
  const SuperAdmin = await prisma.user.create({
    data: {
      name: "Super Admin",
      email: "superadmin@email.com",
      phone: "6287777777777",
      password: bcrypt.hashSync("password", 8),
      employee: {
        create: {
          position: {
            connect: {
              title: "CEO",
            },
          },
          workPlace: {
            connect: {
              place: "Bandung",
            },
          },
        },
      },
      role: {
        connect: {
          name: "SUPER_ADMIN",
        },
      },
    },
  });
  console.log("User (Super Admin): ", SuperAdmin);

  const HrAdmin = await prisma.user.create({
    data: {
      name: "HR Admin",
      email: "hradmin@email.com",
      phone: "628999999999",
      password: bcrypt.hashSync("password", 8),
      employee: {
        create: {
          position: {
            connect: {
              title: "HRD",
            },
          },
          workPlace: {
            connect: {
              place: "Bandung",
            },
          },
        },
      },
      role: {
        connect: {
          name: "HR_ADMIN",
        },
      },
    },
  });
  console.log("User (Admin HR): ", HrAdmin);

  const Employee = await prisma.user.create({
    data: {
      name: "Employee",
      email: "employee@email.com",
      phone: "6286666666666",
      password: bcrypt.hashSync("password", 8),
      employee: {
        create: {
          position: {
            connect: {
              title: "Full-Stack Developer",
            },
          },
          workPlace: {
            connect: {
              place: "Jakarta",
            },
          },
        },
      },
      role: {
        connect: {
          name: "EMPLOYEE",
        },
      },
    },
  });
  console.log("User (Karyawan): ", Employee);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
