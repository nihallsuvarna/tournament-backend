import prisma from "../../config/prisma.js";
import type { SignUpUser } from "../../types/index.js";

export default class Auth {
  async checkEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async addUser({ email, name, password }: SignUpUser) {
    const user = await prisma.user.create({ data: { email, name, password } });
    if (!user) return;
    return await prisma.userRole.create({
      data: {
        user_id: user.id,
        role_id: 2,
      },
    });
  }
}
