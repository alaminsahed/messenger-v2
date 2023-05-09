import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

const postUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please enter your email and password" });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return res.status(200).json({ message: "User created", user: newUser });
};
