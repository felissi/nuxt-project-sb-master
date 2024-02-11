// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/vue";

import { createPinia } from "pinia";
import { i18n } from "@/i18n";
import { h } from "vue";
import { StarThemeProvider } from "#star/atom";
import { pt } from "@/theme";
import PrimeVue from "primevue/config";

/* Import tailwind */
import "../../styles/global.css";
/* Import project style */
import "../../styles";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", (component, args) => {
  args ??= {};
  args.global = args?.global || {};
  args.global.plugins ??= [];
  args?.global?.plugins?.push(createPinia());
  args?.global?.plugins?.push(i18n);
  args?.global?.plugins?.push([
    PrimeVue,
    {
      prefix: "P",
      pt,
      ptOptions: {
        mergeProps: true,
        mergeSections: true,
      },
    },
  ]);

  return mount(
    {
      setup: () => {
        return () => h(StarThemeProvider, {}, h(component));
      },
    },
    args
  );
});

// Example use:
// cy.mount(MyComponent)
