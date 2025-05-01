import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '../auth/auth.guard';
import { SupeAdminGuard } from '../auth/superadmin.guard';

@UseGuards(AuthGuard,SupeAdminGuard)
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
