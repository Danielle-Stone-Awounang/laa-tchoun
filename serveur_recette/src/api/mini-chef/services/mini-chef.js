'use strict';

/**
 * mini-chef service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mini-chef.mini-chef');
