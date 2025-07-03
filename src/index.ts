import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Md Sujon Mia First Book333333333",
  //       content:
  //         "This is my first book. I am very happy to write this book. I hope you will like it.",
  //       author: "Md Sujon Mia",
  //     },
  //   });
  const result = await prisma.post.delete({
    where: {
      id: "632f6a8b-485a-41c4-a427-04e3d743c574",
    },
  });
  console.log(result);
};

main();
