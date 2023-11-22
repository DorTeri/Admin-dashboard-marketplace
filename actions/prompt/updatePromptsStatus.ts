'use server'
import prisma from "@/lib/prismaDb";

export async function updatePromptStatus({ promptId, status }: { promptId: string, status: "Pending" | "Live" | "Declined" }) {
    try {
        const prompt = await prisma.prompts.update({
            where: {
                id: promptId,
            },
            data: {
                status: status
            }
        })
        return prompt
    } catch (error) {
        console.log('get prompts error', error)
    }
}