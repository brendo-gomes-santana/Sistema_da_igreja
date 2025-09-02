"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const bcryptjs_1 = require("bcryptjs");
async function main() {
    await Promise.all([
        index_1.prisma.users.create({
            data: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                password: (0, bcryptjs_1.hashSync)(process.env.PASSWORD, 10)
            }
        }),
        index_1.prisma.categories.createMany({
            data: [
                { name: "Adoração" },
                { name: "Celebração" },
                { name: "Oferta" }
            ],
            skipDuplicates: true,
        }),
        index_1.prisma.types.createMany({
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
                { name: "Mídia - Slide" },
                { name: "Mídia - Iluminação" },
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
    await index_1.prisma.$disconnect();
});
