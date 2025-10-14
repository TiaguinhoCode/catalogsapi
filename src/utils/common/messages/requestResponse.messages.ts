export const requestResponseMessages = {
  SUCCESSFUL_REQUEST: 'Ok',
  SUCCESSFUL_CREATION_REQUEST: (name: string) =>
    `${name} criado(a) com sucesso!`,
  CHANGE_REQUEST: (name: string) => `${name} atualizado(a) com sucesso!`,
  REMOVAL_REQUEST: (name: string) => `${name} removido(a) com sucesso!`,
  ACCESS_NOT_PERMITTED: 'Acesso não permitido',
  UNLINK_REQUEST: (name: string) => `${name} foi desassociado com sucesso.`,
};
