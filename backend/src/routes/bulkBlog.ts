import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'



export const bulkBlogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

bulkBlogRouter.get('/',async(c,next)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blog = await prisma.post.findMany({
        select:{
            content: true,
            title: true,
            id: true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({
        blog
    });
})

