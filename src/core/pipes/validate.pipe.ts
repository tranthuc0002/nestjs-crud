import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
    public async transform(value, metadata: ArgumentMetadata) {
        try {
            return await super.transform(value, metadata);
        } catch (e) {
            var temp = e.response;
            if (e instanceof BadRequestException) {
                throw new UnprocessableEntityException(this.handleError(temp));
            }
        }
    }

    private handleError(errors) {
        return errors;
    }
}