"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    config_1.ConfigModule.forRoot();
    await app.listen(process.env.PORT || 3000, () => {
        console.log(`PORT_LOCAL:${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map