import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: "alaskalaska18@yandex.ru"
    })
    email: string;
    @ApiProperty({
        default: "Sarah"
    })
    fullname: string;
    @ApiProperty({
        default: "123test"
    })
    password: string;

}
