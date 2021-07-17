import { extend } from 'vee-validate';
import {
  required as ruleRequired,
  email as ruleEmail,
  min as ruleMin,
  confirmed as ruleConfirmed,
  regex as ruleRegex,
  between as ruleBetween,
  alpha as ruleAlpha,
  integer as ruleInteger,
  digits as ruleDigits,
  alpha_dash as ruleAlphaDash,
  alpha_num as ruleAlphaNum,
  length as ruleLength,
} from 'vee-validate/dist/rules';
// import en from 'vee-validate/dist/locale/en.json';

// ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

export const required = extend('required', ruleRequired);

export const email = extend('email', ruleEmail);

export const min = extend('min', ruleMin);

export const confirmed = extend('confirmed', ruleConfirmed);

export const regex = extend('regex', ruleRegex);

export const between = extend('between', ruleBetween);

export const alpha = extend('alpha', ruleAlpha);

export const integer = extend('integer', ruleInteger);

export const digits = extend('digits', ruleDigits);

export const alphaDash = extend('alpha-dash', ruleAlphaDash);

export const alphaNum = extend('alpha-num', ruleAlphaNum);

export const length = extend('length', ruleLength);

// Install English.
/* localize({
  en: {
    messages: en.messages,
    names: {
      email: 'Email',
      password: 'Password',
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?',
      },
    },
  },
}); */
