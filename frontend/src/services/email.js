import emailjs from '@emailjs/browser';
/*serviceID,templateID,publicKey devem ser pegos no site do emailjs. As variáveis do template
devem ser name, email e message, para coincidir com as variáveis do formulário do EmailForm.jsx
*/
const serviceID = 'service_glogsfm';
const templateID = 'template_9s1pm4c';
const publicKey = 'KfzlHO7xzvPXSYiMO';

export function sendEmail(formRef) {
  if (!formRef?.current) {
    return Promise.reject(new Error('form reference is not set'));
  }
  return emailjs.sendForm(serviceID, templateID, formRef.current, { publicKey });
}