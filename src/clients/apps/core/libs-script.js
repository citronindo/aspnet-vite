/* eslint-disable import/first */

import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery;

import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import PerfectScrollbar from 'perfect-scrollbar';
window.PerfectScrollbar = PerfectScrollbar;

import 'hammerjs';

import i18next from 'i18next';
import i18NextHttpBackend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
window.i18next = i18next;
window.i18NextHttpBackend = i18NextHttpBackend;
window.languageDetector = languageDetector;

import typeahead from 'typeahead.js';
window.typeahead = typeahead;

import { Helpers } from '@apps/utils/helpers';
window.Helpers = Helpers;

import './libs-style';