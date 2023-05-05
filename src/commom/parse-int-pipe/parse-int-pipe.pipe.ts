import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const number = parseInt(value, 10);
    if (isNaN(number)) {
      throw new BadRequestException(`${value} is not a number`);
    }
    return parseInt(value, 10);
  }
}
