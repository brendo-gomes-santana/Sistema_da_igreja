import { prisma } from "../../prisma";

export default async function ListTypesServer(){
    return await prisma.types.findMany();
}