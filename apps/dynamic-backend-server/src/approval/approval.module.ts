import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApprovalModuleBase } from "./base/approval.module.base";
import { ApprovalService } from "./approval.service";
import { ApprovalController } from "./approval.controller";
import { ApprovalResolver } from "./approval.resolver";

@Module({
  imports: [ApprovalModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApprovalController],
  providers: [ApprovalService, ApprovalResolver],
  exports: [ApprovalService],
})
export class ApprovalModule {}
