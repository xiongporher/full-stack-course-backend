import { Body, Injectable, Post } from '@nestjs/common';


@Injectable()
export class UsersService {
    getExample(): boolean {
        return false;
    }

    @Post()
    test(@Body() {name, lastname}: {name: string, lastname: string}): {
        name: string;
        lastname: string;
    } {
        console.log({ name, lastname});
        return { name: name, lastname}
    }
}
