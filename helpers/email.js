import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const { nombre, email, token } = datos;

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Información del email
    const info = await transport.sendMail({
      from: '"UpTask - Administrador de Proyectos" <gestor.tareas.pruebas@outlook.com>',
      to: email,
      subject: "UpTask - Confirma tu cuenta",
      text: "Comprueba tu cuenta en UpTask",
      html: `<style>
      table {
        width: 600px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
        border: 1px solid #c9c9c9;
      }
      td {
        padding: 20px;
      }
      p {
        margin: 0;
      }
      a {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
      }
      @media screen and (max-width: 600px) {
        table {
          width: 100%;
          border: none;
        }
        td {
          padding: 10px;
        }
        h1 {
          font-size: 18px;
        }
        p {
          font-size: 16px;
        }
        a {
          font-size: 16px;
          padding: 15px 25px;
        }
      }
    </style>
    <table>
          <tr>
            <td style="background-color: rgb(2 132 199); display: flex; justify-content: center;">
              <h1 style="font-size: 21px; color: #ffffff; font-weight: bold;">UpTask</h1>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 60px;">
            <p style="font-size: 16px; color: #666666; text-align:center; padding-bottom:20px;">Hola: <span style="font-weight:bold;">${nombre}</span>, ayúdanos a comprobar tu cuenta</p>
            <p style="font-size: 16px; color: #666666;  padding-bottom:20px; text-align:center;">Tu cuenta ya está casi lista, solo debes comprobarla haciendo clic en el siguiente enlace:</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 50px; text-align: center;">
              <a href="${process.env.FRONTEND_URL}/confirmar/${token}" style="font-size: 14px; font-weight: bold; color: #ffffff; background-color: #0099ff; border-radius: 13px;">Comprobar Cuenta</a>
            </td>
          </tr>
          <tr>
            <td style="background-color: #fafafa; text-align: center">
              <p style="font-size: 12px; color: #999999;">Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
            </td>
          </tr>
    </table>
    
    `
    })
};


export const emailOlvidePassword = async (datos) => {
  const { nombre, email, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Información del email
  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <gestor.tareas.pruebas@outlook.com>',
    to: email,
    subject: "UpTask - Reestablece tu Password",
    text: "Reestablece tu Password",
    html: `<style>
    table {
      width: 600px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
      border: 1px solid #c9c9c9;
    }
    td {
      padding: 20px;
    }
    p {
      margin: 0;
    }
    a {
      display: inline-block;
      text-decoration: none;
      padding: 10px 20px;
    }
    @media screen and (max-width: 600px) {
      table {
        width: 100%;
        border: none;
      }
      td {
        padding: 10px;
      }
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 16px;
      }
      a {
        font-size: 16px;
        padding: 15px 25px;
      }
    }
  </style>
  <table>
        <tr>
          <td style="background-color: rgb(2 132 199); display: flex; justify-content: center;">
            <h1 style="font-size: 21px; color: #ffffff; font-weight: bold;">UpTask</h1>
          </td>
        </tr>
        <tr>
          <td style="padding-top: 60px;">
          <p style="font-size: 16px; color: #666666; text-align:center; padding-bottom:20px;">Hola: <span style="font-weight:bold;">${nombre}</span>, has solicitado reestablecer tu password</p>
          <p style="font-size: 16px; color: #666666;  padding-bottom:20px; text-align:center;">Haz clic en el siguiente enlace para generar un nuevo password:</p>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 50px; text-align: center;">
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" style="font-size: 14px; font-weight: bold; color: #ffffff; background-color: #0099ff; border-radius: 13px;">Reestablecer Password</a>
          </td>
        </tr>
        <tr>
          <td style="background-color: #fafafa; text-align: center">
            <p style="font-size: 12px; color: #999999;">Si tu no solicitaste este email, puedes ignorar el mensaje</p>
          </td>
        </tr>
  </table>
  
  `
  })
};

