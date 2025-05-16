import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { SuperAdminGuard } from '../auth/guards/superadmin.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard, SuperAdminGuard)
@Controller({
  version: '1',
  path: 'admin',
})
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Get("posts")
  findPosts(@Param("limit") limit: number = 10, @Param("offset") offset: number = 0) {
    return this.adminService.getAllPosts(limit, offset);
  }
}
