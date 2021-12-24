import { IFormRenderData } from '~/src/components/formSendUsMessage';

export const formRenderDataLoginPage: Array<IFormRenderData> = [
  {
    placeholder: 'E-mail',
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
    placeholder: 'Password',
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
        min: 10,
        message: 'Min length 10'
      }
    ]
  }
];
