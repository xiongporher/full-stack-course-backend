import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get('hello')
    hello(): boolean{
        return this.userService.getExample();
    }

    @Post('create')
    create(@Body() { name, lastname }: { name: string; lastname: string}): {
        name: string;
        lastname: string;
    }   { 

            return this.userService.test({name, lastname});
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
