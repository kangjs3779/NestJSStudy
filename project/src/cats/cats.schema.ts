import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  // 컬럼을 정의함, 옵션을 통해서 컬럼에 대한 설정을 한다
  // DB에 저장될 때, 유효한 데이터 형식으로 저장될 수 있도록 validation을 해줘야 한다

  @Prop({ required: true, unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;
}

// cat 클래스를 schema로 변환
export const CatSchema = SchemaFactory.createForClass(Cat);
