import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PostgresConfigService{
    private prefix: string = 'postgres';
    constructor(private readonly config:ConfigService) {}
    get host() {
        return this.config.get<string>(`${this.prefix}.post`);
    }
    get port() {
        return this.config.get<number>(`${this.prefix}.port`);
    }
    get user() {
        return this.config.get<string>(`${this.prefix}.user`);
    }
    get pserword() {
        return this.config.get<string>(`${this.prefix}.pserword`);
    }
    get database() {
        return this.config.get<string>(`${this.prefix}.database`);
    }
}
