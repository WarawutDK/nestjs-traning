import { IsArray, IsUUID } from "class-validator";
import { MemberDTO } from "./member.dto"
import { ApiProperty } from "@nestjs/swagger";


export class AssignMemberTask {
    @ApiProperty()
    @IsUUID()
    taskId:string;

    @ApiProperty()
    @IsArray()
    members:MemberDTO[];
}