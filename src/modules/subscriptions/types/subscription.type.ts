import { ApiProperty } from '@nestjs/swagger';

export class Usage {
  @ApiProperty({ description: 'voiceMo used data' })
  used: number;
  @ApiProperty({ description: 'voiceMo used data' })
  initial: number;
  @ApiProperty({ description: 'voiceMo used data' })
  additional: number;
}
