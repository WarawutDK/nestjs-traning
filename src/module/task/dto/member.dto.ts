import { IsUUID } from "class-validator";


export class MemberDTO {
    @IsUUID()
    id:string;
}