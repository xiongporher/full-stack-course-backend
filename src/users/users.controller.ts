import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { log } from 'console';

@Controller('users')
export class UsersController {
    @Get('hello')
    hello(): string{
        return "Hello World!!"
    }

    @Post('create')
    create(@Body() { name, lastname }: { name: string; lastname: string}): {
        name: string;
        lastname: string;
    }   { 
            console.log({ name, lastname });
            return { name: name, lastname };
        }
        @Put('update/:id')
        update(@Param() {id}:{id:string}): string {
            return id;
        }

        @Get('user')
        findOne(@Query() {id}: {id: string}): string {
            return id;
        }
}
