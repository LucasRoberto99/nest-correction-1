import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // timestamp auto
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  cryptedPassword: string;
}

// une fois le schéma fait on peut le créer avec Mongoose
// on utilise pas mongoose.model ou schema mais SchemaFactory
export const UserSchema = SchemaFactory.createForClass(User);

// mais quand on va vouloir dire à notre un fichier d'utiliser
//  User il va falloir un type !
// le moyen de faire ça est de faire :

export type UserDocument = User & Document;
// c'est un type qui reprend le schéma que l'on vient de faire
// et les éléments d'un document mongoose
