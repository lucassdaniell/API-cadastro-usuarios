import express from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const app = express();
app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {

    const user = await prisma.user.findMany()

    res.status(200).json(user);
})


app.post('/users', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    console.log(user)

    res.status(201).json(user);
})


app.put('/users/:id', async (req, res) => {

    req.params.id
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    console.log(user)

    res.status(200).json(user);
})


app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usauário deletado com sucesso!" })
})


app.listen(3000);

/*
  user name => lucas001
  senha => CEibm60U6aYENr2B

 */