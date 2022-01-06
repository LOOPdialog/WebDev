import { IFormRenderData } from '~/src/components/formSendUsMessage';

export const formRenderDataLoginPage: Array<IFormRenderData> = [
  {
    placeholder: 'E-Mail',
    type: 'input',
    itemName: 'email',
    // titleName: 'Username',
    rules: [
      {
        required: true,
        message: 'Email doesn’t exist'
      }
    ]
  },
  {
    placeholder: 'Passwort',
    type: 'password',
    itemName: 'password',
    // titleName: 'Password',
    // readyIcon: true,
    rules: [
      {
        required: true,
        message: 'Password has be required'
      },
      {
        min: 6,
        message: 'Min length 6'
      }
    ]
  }
];
