export const requestResponseMessages = {
  SUCCESSFUL_REQUEST: 'Ok',
  SUCCESSFUL_CREATION_REQUEST: (name: string) => `${name} criado com sucesso!`,
  CHANGE_REQUEST: (name: string) => `Dados do ${name} atualizados com sucesso!`,
  REMOVAL_REQUEST: (name: string) => `Dados do ${name} removido com sucesso!`,
  ACCESS_NOT_PERMITTED: 'Acesso não permitido',
};
