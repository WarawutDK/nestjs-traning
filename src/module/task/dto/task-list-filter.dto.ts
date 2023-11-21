import { IsNotEmpty ,IsUUID ,IsDate,IsEmpty,IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"; 

export class TaskListFilter {
    
    // @IsEmpty()
    @ApiProperty()
    @IsString()
    title:string;
    
    // @IsEmpty()
    @ApiProperty()
    @IsString()
    description:string;

    // @IsEmpty()
    @ApiProperty()
    @IsUUID()
    status:string;
    
    // @IsEmpty()
    @ApiProperty()
    @IsDate()
    datestart:Date;
    
    // @IsEmpty()
    @ApiProperty()
    @IsDate()
    dateend:Date;
}