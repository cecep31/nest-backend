import { Controller, Get, Post, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { SuperAdminGuard } from '../auth/guards/superadmin.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({
    version: '1',
    path: 'articles',
})
@UseGuards(JwtAuthGuard, SuperAdminGuard)
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Get()
    async findAll(@Query('offset') offset: number = 0, @Query('limit') limit: number = 10) {
        const articles = await this.articleService.findAll({ offset, limit });
        return {
            success: true,
            message: 'Successfully fetched articles',
            data: articles,
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const article = await this.articleService.findById(id);
        return {
            success: !!article,
            message: article ? 'Successfully fetched article' : 'Article not found',
            data: article || [],
        };
    }

    @Post()
    async create(@Body() createDto: any) {
        const article = await this.articleService.createArticle(createDto);
        return {
            success: true,
            message: 'Successfully created article',
            data: article,
        };
    }


    @Delete(':id')
    async remove(@Param('id') id: string) {
        const result = await this.articleService.deleteArticle(id);
        return {
            success: true,
            message: 'Successfully deleted article',
            data: result,
        };
    }
}