import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProcessModuleBase } from "./base/process.module.base";
import { ProcessService } from "./process.service";
import { ProcessController } from "./process.controller";
import { ProcessResolver } from "./process.resolver";

@Module({
  imports: [ProcessModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProcessController],
  providers: [ProcessService, ProcessResolver],
  exports: [ProcessService],
})
export class ProcessModule {}
