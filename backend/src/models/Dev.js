const { Schema, model } = require('mongoose');

const DevSchema = new Schema(
  {
    name: {
      // Descrição de objetos
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String, // Como não é 'required' (obrigatório), não precisa declarar o objeto
    avatar: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Dev',
      },
    ], // Podem dar likes e deslikes em vários devs
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Dev',
      },
    ],
  },
  {
    timestamps: true, // Quando for criado ou quando foi atualizado
    // createdAt e updatedAt
  },
);

module.exports = model('Dev', DevSchema);
