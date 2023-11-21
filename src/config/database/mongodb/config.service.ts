import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MongodbConfigService{
    private prefix: string = 'mongodb';
    constructor(private readonly config:ConfigService) {}
    get url() {
        return this.config.get<string>(`${this.prefix}.url`);
    }
    
    get database() {
        return this.config.get<string>(`${this.prefix}.database`);
    }
}
