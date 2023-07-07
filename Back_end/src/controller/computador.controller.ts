import { PrismaClient } from '@prisma/client';
import {Request, Response, response} from 'express';
import { Computador } from './../models/computador.models';

const prisma = new PrismaClient();

export class ComputadorController{

    async listar (req : Request, resp : Response) : Promise<Response>{

        const computadores = await prisma.computador.findMany({});

        return response.status(200).json({message : "Tudo certo!", dados : computadores});
    }

    async cadastrar (req : Request, resp : Response) : Promise<Response> {

        let computador : Computador = new Computador();

        computador.dono = req.body.dono;
        computador.placamae = req.body.placamae;
        computador.processador = req.body.processador;
        computador.memoria = Number.parseInt(req.body.memoria);
        computador.armazenamento = req.body.armazenamento;
        computador.fonte = req.body.fonte;
        computador.criadoEm = req.body.fonte;

        const computadorCadastrado = await prisma.computador.create({
            data: {
                dono : computador.dono,
                placamae : computador.placamae,
                processador : computador.processador,
                memoria : computador.memoria,
                armazenamento : computador.armazenamento,
                fonte : computador.fonte,
                criadoEm : computador.criadoEm,
            },
        });

        return resp
        .status(201)
        .json({ message : "Computador Cadastrado com sucesso!", dados : computadorCadastrado});
    }

}