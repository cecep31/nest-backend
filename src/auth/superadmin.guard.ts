import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class SupeAdminGuard implements CanActivate{

    canActivate(context: ExecutionContext): boolean {
        const { user } = context.switchToHttp().getRequest();
        if (user.issuperadmin) {
            return true
        } else{
            throw new ForbiddenException()
        }
    }
}