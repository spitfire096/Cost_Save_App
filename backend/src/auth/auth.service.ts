import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '../users/schemas/user.schema';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(loginDto: LoginDto): Promise<UserDocument | null> {
    // Implement user validation logic here
    // For example, check username and password against the database
    return null; // Replace with actual user object if valid
  }

  async login(user: UserDocument): Promise<{ access_token: string }> {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Example usage in a method:
  async someMethod(user: UserDocument) {
    // ...existing code...
  }
}