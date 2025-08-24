import { prisma } from "../../prisma";

export default async function ListCategoriesServer(){
    return await prisma.categories.findMany()
}