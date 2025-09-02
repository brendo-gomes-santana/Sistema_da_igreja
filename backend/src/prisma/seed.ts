import { prisma } from './index';
import { hashSync } from 'bcryptjs';

async function main() {
    await Promise.all([

        // Usa upsert para evitar duplicações
        prisma.users.upsert({
            where: { email: process.env.EMAIL as string },
            update: {}, // não atualiza se já existir
            create: {
                email: process.env.EMAIL as string,
                name: process.env.NAME as string,
                password: hashSync(process.env.PASSWORD as string, 10)
            }
        }),

        prisma.categories.createMany({
            data: [
                { name: "Adoração" },
                { name: "Celebração" },
                { name: "Oferta" }
            ],
            skipDuplicates: true,
        }),

        prisma.types.createMany({
            data: [
                { name: "Guitarra" },
                { name: "Violão" },
                { name: "Teclado" },
                { name: "Contra Baixo" },
                { name: "Voz principal" },
                { name: "Back vocal" },
                { name: "Bateria" },
                { name: "Direção Musical" },
                { name: "Sonoplastia" },
            ],
            skipDuplicates: true,
        })
    ]);
}

main()
    .then(() => {
        console.log("✅ Seed executado com sucesso");
    })
    .catch((e) => {
        console.error("❌ Erro no seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
