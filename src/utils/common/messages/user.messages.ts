export const UserMessages = {
  EMAIL_ALREADY_REGISTERED: 'Email já tem cadastrado',
  COMPANY_NOT_FOUND: 'Empresa não cadastrada',
  VERIFIED_EMAIL: 'E‑mail verificado com sucesso!',
  EXPIRED_TOKEN: 'Token expirado — cadastro removido',
  TOKEN_VALIDATION: 'Token é obrigatório para verificação',
  INVALID_TOKEN: 'Token inválido',
  USER_NOT_FOUND: 'Dados de usuários não encontrados!',
  CANNOT_DELETE_MASTER_USER: 'Usuário master não pode excluir',
  LOGIN_SUCCESSFUL: 'Login realizado com sucesso!',
  EMAIL_CONFIRMATION_SUBJECT: '🔒 Confirme seu e‑mail para ativar sua conta',
  INCORRECT_PASSWORD: 'Senha incorreta',
  EMAIL_CONFIRMATION_BODY: (name: string, surname: string, link: string) =>
    `<p>Olá ${name} ${surname}!</p>
        <p>Obrigado por criar sua conta na Catloguês. Para ativar seu acesso, basta confirmar seu e‑mail clicando no botão abaixo:</p>
        <p style="text-align:center;">
          <a href="${link}" style="background-color:#007BFF;color:#ffffff;
            padding:10px 20px;text-decoration:none;border-radius:4px;">
            CONFIRMAR E‑MAIL
          </a>
        </p>
        <p>Se o botão não funcionar, copie e cole este link no seu navegador:<br/>  
          <a href="${link}">${link}</a>
        </p>
        <p>🔔 Esse link expira em 24 horas. Após esse período, será necessário solicitar outro.</p>
        <p>Se você não solicitou esse e‑mail, pode ignorar esta mensagem sem problemas.</p>
        <p>Atenciosamente,<br/>Equipe LogicHub</p>`,
};
