import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class SuperAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user || typeof user.isSuperAdmin !== 'boolean') {
            throw new ForbiddenException('User information is missing or invalid.');
        }

        if (user.isSuperAdmin) {
            return true;
        } else {
            throw new ForbiddenException('Access denied: Super admin privileges required.');
        }
    }
}