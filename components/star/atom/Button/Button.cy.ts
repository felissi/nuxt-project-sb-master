import Button from "./Button.vue";
// import { i18n } from "@/i18n";
// import { StarThemeProvider } from "#star/atom";
// import { pt } from "@/theme";
// /* Import tailwind */
// import "@/styles/global.css";
// /* Import project style */
// import "@/styles";
// import PrimeVue from "primevue/config";

// describe("<Button />", () => {
//   it("renders", () => {
//     // see: https://on.cypress.io/mounting-vue
//     cy.mount(StarThemeProvider, {
//       global: {
//         plugins: [
//           i18n,
//           [
//             PrimeVue,
//             {
//               prefix: "P",
//               pt,
//               ptOptions: {
//                 mergeProps: true,
//                 mergeSections: true,
//               },
//             },
//           ],
//         ],
//       },
//       slots: {
//         default: Button,
//       },
//     });
//   });
// });

describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Button, {
      props: {
        label: "test",
      },
    });
  });
});
