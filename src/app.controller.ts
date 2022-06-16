
import { Controller, Get, Header, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appServices: AppService) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // login(@Request() req): any {
  //   return this.authService.login(req.user);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('protected')
  // @Header('Content-Type', 'text/html')
  // getHello(@Request() req): string { //TODO:  require an Bearer token, validate token
  //   return req.user;
  //   //return this.appService.getHello();
  //   //return {name:'Ei'};
  // }
}
