flowchart LR

0[".dependency-cruiser.cjs"]
subgraph 1[".nuxt"]
2["app.config.mjs"]
8["components.d.ts"]
subgraph 1U["dev"]
1V["index.mjs"]
end
subgraph 41["dist"]
subgraph 42["server"]
43["client.manifest.mjs"]
end
end
44["imports.d.ts"]
7I["nuxt.d.ts"]
subgraph 8J["schema"]
8K["nuxt.schema.d.ts"]
end
subgraph 8L["tailwind.config"]
8M["viewer-config.cjs"]
end
subgraph 8N["types"]
8O["app.config.d.ts"]
8Q["imports.d.ts"]
8Y["layouts.d.ts"]
8Z["middleware.d.ts"]
90["nitro-config.d.ts"]
91["nitro-imports.d.ts"]
9F["nitro-nuxt.d.ts"]
9M["schema.d.ts"]
9N["nitro-routes.d.ts"]
9Q["nitro.d.ts"]
9R["plugins.d.ts"]
AG["vue-shim.d.ts"]
end
8X["vue-router.d.ts"]
end
3["#app"]
subgraph 4["node_modules"]
subgraph 5["defu"]
subgraph 6["dist"]
7["defu.mjs"]
end
end
subgraph 9["@nuxt"]
subgraph A["ui-templates"]
subgraph B["dist"]
subgraph C["templates"]
D["welcome.vue"]
end
end
end
subgraph 45["devtools"]
subgraph 46["dist"]
subgraph 47["runtime"]
48["use-nuxt-devtools.mjs"]
subgraph 9S["plugins"]
9T["devtools.client.mjs"]
9U["devtools.server.mjs"]
end
end
7J["module.mjs"]
end
end
subgraph 7K["telemetry"]
subgraph 7L["dist"]
7M["module.mjs"]
end
end
end
subgraph E["nuxt"]
subgraph F["dist"]
subgraph G["app"]
subgraph H["components"]
I["client-only.js"]
J["dev-only.js"]
K["nuxt-error-boundary.js"]
L["nuxt-layout.js"]
M["nuxt-link.js"]
N["nuxt-loading-indicator.js"]
O["server-placeholder.js"]
end
8T["index.js"]
subgraph 8U["compat"]
8V["vue-demi.js"]
end
subgraph 9Z["plugins"]
A0["chunk-reload.client.js"]
A1["revive-payload.client.js"]
A2["revive-payload.server.js"]
end
end
subgraph P["head"]
subgraph Q["runtime"]
R["components.js"]
subgraph A3["plugins"]
A4["unhead.js"]
end
end
end
subgraph S["pages"]
subgraph T["runtime"]
U["page.js"]
4J["composables.js"]
subgraph A5["plugins"]
A6["prefetch.client.js"]
A7["router.js"]
end
end
end
7X["index.mjs"]
subgraph 99["core"]
subgraph 9A["runtime"]
subgraph 9B["nitro"]
9C["config.js"]
9D["paths.js"]
9O["renderer.js"]
end
end
end
end
6U["config.js"]
8P["schema.js"]
end
subgraph V["primevue"]
subgraph W["breadcrumb"]
X["breadcrumb.cjs.js"]
end
subgraph Y["button"]
Z["button.cjs.js"]
end
subgraph 10["carousel"]
11["carousel.cjs.js"]
end
subgraph 12["checkbox"]
13["checkbox.cjs.js"]
end
subgraph 14["divider"]
15["divider.cjs.js"]
end
subgraph 16["dropdown"]
17["dropdown.cjs.js"]
end
subgraph 18["dynamicdialog"]
19["dynamicdialog.cjs.js"]
end
subgraph 1A["fieldset"]
1B["fieldset.cjs.js"]
end
subgraph 1C["inputswitch"]
1D["inputswitch.cjs.js"]
end
subgraph 1E["inputtext"]
1F["inputtext.cjs.js"]
end
subgraph 1G["menu"]
1H["menu.cjs.js"]
end
subgraph 1I["menubar"]
1J["menubar.cjs.js"]
end
subgraph 1K["message"]
1L["message.cjs.js"]
end
subgraph 1M["multiselect"]
1N["multiselect.cjs.js"]
end
subgraph 1O["overlaypanel"]
1P["overlaypanel.cjs.js"]
end
subgraph 1Q["sidebar"]
1R["sidebar.cjs.js"]
end
subgraph 1S["toast"]
1T["toast.cjs.js"]
end
subgraph 4S["usestyle"]
4T["usestyle.cjs.js"]
end
subgraph 5E["config"]
5F["config.cjs.js"]
end
subgraph C2["badge"]
C3["badge.cjs.js"]
end
subgraph C4["focustrap"]
C5["focustrap.cjs.js"]
end
subgraph C6["ripple"]
C7["ripple.cjs.js"]
end
subgraph C8["styleclass"]
C9["styleclass.cjs.js"]
end
subgraph CA["tooltip"]
CB["tooltip.cjs.js"]
end
subgraph EA["chip"]
EB["chip.cjs.js"]
end
subgraph F0["listbox"]
F1["listbox.cjs.js"]
end
subgraph GB["paginator"]
GC["paginator.cjs.js"]
end
subgraph KZ["usedialog"]
L0["usedialog.cjs.js"]
end
end
subgraph 49["@pinia-plugin-persistedstate"]
subgraph 4A["nuxt"]
subgraph 4B["dist"]
subgraph 4C["runtime"]
4D["storages.mjs"]
9V["plugin.mjs"]
end
7R["module.mjs"]
end
end
end
subgraph 4E["@pinia"]
subgraph 4F["nuxt"]
subgraph 4G["dist"]
subgraph 4H["runtime"]
4I["composables.mjs"]
9W["plugin.vue3.mjs"]
end
7S["module.mjs"]
end
end
end
subgraph 4K["@unhead"]
subgraph 4L["vue"]
subgraph 4M["dist"]
4N["index.mjs"]
8R["index.cjs"]
end
end
end
subgraph 4O["@vueuse"]
subgraph 4P["core"]
4Q["index.mjs"]
8S["index.cjs"]
end
subgraph 61["router"]
62["index.mjs"]
end
subgraph 7T["nuxt"]
7U["index.mjs"]
end
end
subgraph 4U["vue"]
4V["index.mjs"]
8W["index.js"]
end
subgraph 4W["vue-demi"]
subgraph 4X["lib"]
4Y["index.cjs"]
end
end
subgraph 51["bem-cn"]
subgraph 52["lib"]
53["index.js"]
end
end
subgraph 5M["vue-i18n"]
subgraph 5N["dist"]
5O["vue-i18n.mjs"]
end
end
subgraph 5S["fp-ts"]
subgraph 5T["lib"]
5U["function.js"]
5V["IO.js"]
5W["Record.js"]
69["Option.js"]
DY["Predicate.js"]
HN["Array.js"]
LW["Tuple.js"]
MB["NonEmptyArray.js"]
MD["Semigroup.js"]
MI["Eq.js"]
end
end
subgraph 5X["tailwind-variants"]
subgraph 5Y["dist"]
5Z["index.cjs"]
end
end
subgraph 63["zod"]
subgraph 64["lib"]
65["index.js"]
end
end
subgraph 67["dayjs"]
68["dayjs.min.js"]
end
subgraph 6D["pinia"]
subgraph 6E["dist"]
6F["pinia.mjs"]
end
end
subgraph 6J["change-case"]
subgraph 6K["dist"]
6L["keys.js"]
end
end
subgraph 6Q["@vanilla-extract"]
subgraph 6R["vite-plugin"]
subgraph 6S["dist"]
6T["vanilla-extract-vite-plugin.cjs.js"]
end
end
subgraph P6["css"]
subgraph P7["dist"]
P8["vanilla-extract-css.cjs.js"]
end
end
end
subgraph 6V["rollup-plugin-visualizer"]
subgraph 6W["dist"]
subgraph 6X["plugin"]
6Y["index.js"]
end
end
end
subgraph 73["nuxt-primevue"]
subgraph 74["dist"]
75["module.mjs"]
subgraph 9X["runtime"]
9Y["plugin.client.mjs"]
end
end
end
subgraph 7A["clsx"]
subgraph 7B["dist"]
7C["clsx.mjs"]
end
end
subgraph 7D["tailwind-merge"]
subgraph 7E["dist"]
7F["bundle-cjs.js"]
end
end
subgraph 7N["@nuxtjs"]
subgraph 7O["tailwindcss"]
subgraph 7P["dist"]
7Q["module.cjs"]
end
end
end
subgraph 81["shadcn-nuxt"]
subgraph 82["dist"]
83["module.mjs"]
end
end
subgraph 8F["vue-router"]
subgraph 8G["dist"]
8H["vue-router.node.mjs"]
end
end
subgraph 92["h3"]
subgraph 93["dist"]
94["index.cjs"]
9E["index.mjs"]
end
end
subgraph 95["nitropack"]
subgraph 96["dist"]
subgraph 97["runtime"]
98["index.mjs"]
end
9P["index.mjs"]
end
end
subgraph AD["vue-query"]
subgraph AE["lib"]
AF["index.js"]
end
end
subgraph AK["react"]
AL["index.js"]
end
subgraph AQ["@storybook"]
subgraph AR["addon-docs"]
subgraph AS["dist"]
AT["blocks.js"]
end
end
subgraph AX["vue3"]
subgraph AY["dist"]
AZ["index.js"]
end
end
subgraph B5["vue3-vite"]
subgraph B6["dist"]
B7["index.js"]
end
end
subgraph BJ["manager-api"]
subgraph BK["dist"]
BL["index.js"]
end
end
subgraph BQ["theming"]
subgraph BR["dist"]
BS["create.js"]
end
end
subgraph BZ["addon-viewport"]
subgraph C0["dist"]
C1["index.js"]
end
end
end
subgraph B1["@babel"]
subgraph B2["core"]
subgraph B3["lib"]
B4["index.js"]
end
end
end
subgraph B8["@vitejs"]
subgraph B9["plugin-vue-jsx"]
subgraph BA["dist"]
BB["index.mjs"]
end
end
subgraph PC["plugin-vue"]
subgraph PD["dist"]
PE["index.mjs"]
end
end
end
subgraph BC["autoprefixer"]
subgraph BD["lib"]
BE["autoprefixer.js"]
end
end
subgraph BF["tailwindcss"]
subgraph BG["lib"]
BH["index.js"]
end
end
subgraph E2["vitest"]
E3["index.cjs"]
end
subgraph E6["@iconify"]
subgraph E7["vue"]
subgraph E8["dist"]
E9["iconify.mjs"]
end
end
end
subgraph FZ["radix-vue"]
subgraph G0["dist"]
G1["index.umd.cjs"]
end
end
subgraph H7["@vue"]
subgraph H8["test-utils"]
subgraph H9["dist"]
HA["vue-test-utils.esm-bundler.mjs"]
end
end
end
subgraph IO["lucide-vue-next"]
subgraph IP["dist"]
subgraph IQ["cjs"]
IR["lucide-vue-next.js"]
end
end
end
subgraph LF["axios"]
subgraph LG["dist"]
subgraph LH["node"]
LI["axios.cjs"]
end
end
end
subgraph P1["tailwindcss-animate"]
P2["index.js"]
end
subgraph PF["vite"]
subgraph PG["dist"]
subgraph PH["node"]
PI["index.js"]
end
end
end
end
subgraph 1W[" "]
subgraph 1X[" "]
subgraph 1Y["C:"]
subgraph 1Z["Users"]
subgraph 20["user"]
subgraph 21["Desktop"]
subgraph 22["js-practice"]
subgraph 23["nuxt-project-sb-master"]
subgraph 24[".nuxt"]
subgraph 25["dist"]
subgraph 26["server"]
27["client.manifest.mjs"]
end
end
end
subgraph 28["node_modules"]
subgraph 29["@unhead"]
subgraph 2A["shared"]
subgraph 2B["dist"]
2C["index.mjs"]
end
end
subgraph 2D["ssr"]
subgraph 2E["dist"]
2F["index.mjs"]
end
end
end
subgraph 2G["defu"]
subgraph 2H["dist"]
2I["defu.mjs"]
end
end
subgraph 2J["destr"]
subgraph 2K["dist"]
2L["index.mjs"]
end
end
subgraph 2M["devalue"]
2N["index.js"]
end
subgraph 2O["h3"]
subgraph 2P["dist"]
2Q["index.mjs"]
end
end
subgraph 2R["hookable"]
subgraph 2S["dist"]
2T["index.mjs"]
end
end
subgraph 2U["klona"]
subgraph 2V["dist"]
2W["index.mjs"]
end
end
subgraph 2X["node-fetch-native"]
subgraph 2Y["dist"]
2Z["polyfill.mjs"]
end
end
subgraph 30["ofetch"]
subgraph 31["dist"]
32["node.mjs"]
end
end
subgraph 33["ohash"]
subgraph 34["dist"]
35["index.mjs"]
end
end
subgraph 36["radix3"]
subgraph 37["dist"]
38["index.mjs"]
end
end
subgraph 39["scule"]
subgraph 3A["dist"]
3B["index.mjs"]
end
end
subgraph 3C["ufo"]
subgraph 3D["dist"]
3E["index.mjs"]
end
end
subgraph 3F["unenv"]
subgraph 3G["runtime"]
subgraph 3H["fetch"]
3I["index.mjs"]
end
end
end
subgraph 3J["unhead"]
subgraph 3K["dist"]
3L["index.mjs"]
end
end
subgraph 3M["unstorage"]
subgraph 3N["dist"]
3O["index.mjs"]
end
subgraph 3P["drivers"]
3Q["fs.mjs"]
end
end
subgraph 3R["vue-bundle-renderer"]
subgraph 3S["dist"]
3T["runtime.mjs"]
end
end
subgraph 3U["vue"]
3V["index.mjs"]
end
end
end
end
end
end
end
end
end
end
3W["fs"]
3X["http"]
3Y["os"]
3Z["path"]
40["worker_threads"]
4R["#vue-router"]
subgraph 4Z["composables"]
50["bem.ts"]
54["test-read-props.ts"]
5D["useDefaultPT.ts"]
5G["useMedia.ts"]
5J["useNotice.ts"]
5P["usePassThrough.ts"]
60["useSearchParams.ts"]
66["useStarDateFormat.ts"]
K4["index.ts"]
K5["usePassThrough.test.ts"]
KB["useStarDateFormat.test.ts"]
end
subgraph 55["@"]
subgraph 56["components"]
subgraph 57["star"]
subgraph 58["atom"]
subgraph 59["Footer"]
5A["footer-tv"]
O2["FooterTemplate.vue"]
end
subgraph BX["ThemeProvider"]
BY["theme-provider"]
end
D6["Icon"]
DE["Button"]
DJ["FieldSet"]
FH["Divider"]
subgraph GN["MenuItem"]
GO["SideNavItem.vue"]
GQ["item-tv"]
NN["Item.vue"]
end
subgraph MM["Alert"]
MN["Alert.vue"]
end
subgraph MP["Banner"]
MQ["Banner.vue"]
end
subgraph MW["Card"]
MY["CardButton.vue"]
end
N8["Chip"]
subgraph ND["Filter"]
NE["MultipleSelect.vue"]
NZ["SelectItem.vue"]
O5["Test.vue"]
O7["StatusFilter.vue"]
OH["YearFilter.vue"]
OJ["YearFilterV2.vue"]
end
subgraph NG["Header"]
NH["HeaderTemplate.vue"]
end
subgraph NP["SideNav"]
NQ["NavItem"]
end
NS["Option"]
subgraph NU["Tabs"]
NW["PaperTabs.vue"]
end
subgraph OE["IdentityBar"]
OF["UserMenu.vue"]
end
end
end
subgraph DL["ui"]
F6["command"]
F7["popover"]
F8["select"]
IK["dialog"]
end
end
subgraph 5B["composables"]
5C["usePassThrough"]
end
subgraph 5H["theme"]
5I["theme.css"]
CD["mytheme.scss"]
H4["theme.css.ts"]
end
subgraph 5K["services"]
subgraph 5L["api"]
IB["utils"]
M8["load-student-paper"]
M9["load-teacher-paper"]
end
DC["models"]
subgraph DU["composites"]
DV["edit-paper"]
subgraph HK["load-paper"]
HL["usePaperGroupByTab"]
HM["useTriagePaper"]
I0["useOwner"]
end
end
end
subgraph 5Q["utils"]
5R["tv"]
H5["props"]
end
subgraph AA["i18n"]
AB["i18n-instance"]
end
subgraph CF["stores"]
CG["environment"]
end
CH["styles"]
subgraph CU["assets"]
CV["star_header_chi.png?url"]
CW["star_header_Cmath.png?url"]
CX["star_header_Emath.png?url"]
CY["star_header_eng.png?url"]
CZ["star_header_stu.png?url"]
FN["logo.png"]
end
end
subgraph 6A["stores"]
6B["index.ts"]
6C["environment.ts"]
6G["test.ts"]
end
subgraph 6H["utils"]
6I["case.ts"]
6M["classes.ts"]
6N["parse-tsconfig.ts"]
78["props.ts"]
79["shadcn-utils.ts"]
7G["tv.ts"]
7H["variants.ts"]
P9["index.ts"]
PA["tv.test.ts"]
end
subgraph 6O["config"]
6P["nuxt-config.ts"]
KC["config.ts"]
KD["index.ts"]
KE["local.ts"]
end
subgraph 6Z["theme"]
70["index.ts"]
subgraph 71["theme-base"]
72["primevue-pass-through.ts"]
end
76["theme-dark.ts"]
77["theme-light.ts"]
P3["scale-color.ts"]
P5["theme.css.ts"]
end
7V["components.d.ts"]
7W["imports.d.ts"]
7Y["nuxt-config-schema"]
subgraph 7Z["schema"]
80["nuxt.schema.d.ts"]
end
subgraph 84["types"]
85["app.config.d.ts"]
86["imports.d.ts"]
87["layouts.d.ts"]
88["middleware.d.ts"]
89["nitro.d.ts"]
8A["plugins.d.ts"]
8B["schema.d.ts"]
8C["vue-shim.d.ts"]
end
subgraph 8D["vite"]
8E["client"]
end
8I["vue-router.d.ts"]
subgraph 9G["nuxt"]
subgraph 9H["dist"]
subgraph 9I["core"]
subgraph 9J["runtime"]
subgraph 9K["nitro"]
9L["renderer"]
end
end
end
end
end
subgraph A8["plugins"]
A9["i18n.ts"]
AC["vue-query.ts"]
end
subgraph AH[".storybook"]
subgraph AI["blocks"]
AJ["EditThisPage.tsx"]
AM["LastModified.tsx"]
subgraph AN["NamedSource"]
AO["index.tsx"]
AP["named-source.css"]
end
AU["index.tsx"]
subgraph AV["parse-arg-types"]
AW["index.ts"]
end
end
B0["main.ts"]
BI["manager.ts"]
BM["theme.ts"]
BT["preview.ts"]
BW["sb-style.css"]
end
subgraph BN["stories"]
subgraph BO["assets"]
BP["sui-logo.png"]
MT["230103-new-cardbutton-for-nsp.png"]
MU["card-buttons.png"]
MV["time-icon.png"]
end
ML["Alert.stories.ts"]
MO["Banner.stories.ts"]
MR["Button.stories.ts"]
MS["Card.stories.ts"]
MX["CardButton.stories.ts"]
MZ["CardButtonBar.stories.ts"]
N0["CardDateTime.stories.ts"]
N3["CardMoreAction.stories.ts"]
N5["CardTimeProgress.stories.ts"]
N7["Chip.stories.ts"]
N9["ControlBar.stories.ts"]
NA["DateTime.stories.ts"]
NB["FieldSet.stories.ts"]
NC["Filter.stories.ts"]
NF["Header.stories.ts"]
NK["IdentityBar.stories.ts"]
NL["MarkingTag.stories.ts"]
NM["MenuItem.stories.ts"]
NO["NavItem.stories.ts"]
NR["OptionItem.stories.ts"]
NT["PaperTabItem.stories.ts"]
NV["PaperTabs.stories.ts"]
NX["Search.stories.ts"]
NY["SelectItem.stories.ts"]
O0["StarFooter.stories.ts"]
O1["StarFooterTemplate.stories.ts"]
O3["StarMultipleSelect.stories.ts"]
O4["StarMultipleSelectTest.stories.ts"]
O6["StatusFilter.stories.ts"]
O8["StatusTag.stories.ts"]
O9["SubjectTag.stories.ts"]
OA["TabOption.stories.ts"]
OB["Tabs.stories.ts"]
OC["Tooltip.stories.ts"]
OD["UserMenu.stories.ts"]
OG["YearFilter.stories.ts"]
OI["YearFilterV2.stories.ts"]
subgraph OK["utils"]
OL["parse-type.ts"]
end
end
subgraph BU["styles"]
BV["global.css"]
CC["index.ts"]
subgraph OM["theme-light"]
ON["animation.ts"]
OO["border.ts"]
OP["breakpoint.ts"]
OQ["color.ts"]
OR["font.ts"]
OS["index.ts"]
OT["radius.ts"]
OU["scrollbar.ts"]
OV["size.ts"]
OW["shadow.ts"]
OX["spacing.ts"]
OY["z-index.ts"]
end
OZ["theme.ts"]
end
CE["app.vue"]
subgraph CI["#star"]
subgraph DM["atom"]
DN["Button"]
DO["Icon"]
DW["Chip"]
GU["Option"]
subgraph HP["Filter"]
HQ["OwnerFilter.vue"]
HR["StatusFilter.vue"]
HS["YearFilter.vue"]
HT["YearFilterV2.vue"]
end
HU["Search"]
end
L4["pages"]
end
subgraph CJ["components"]
subgraph CK["pages"]
subgraph CL["@teacher"]
CM["TeacherHomePage.vue"]
end
end
subgraph CN["star"]
subgraph CO["atom"]
subgraph CP["Alert"]
CQ["Alert.vue"]
CR["index.ts"]
end
subgraph CS["Banner"]
CT["Banner.vue"]
D0["index.ts"]
end
subgraph D1["BreadcrumbNav"]
D2["BreadcrumbNav.vue"]
D3["index.tsx"]
end
subgraph D4["Button"]
D5["Button.vue"]
D7["button-tv.ts"]
D8["button-tv-backup.ts"]
D9["index.ts"]
end
subgraph DA["Card"]
DB["CardActionBar.vue"]
DD["CardButton.vue"]
DF["CardActivityBar.vue"]
DG["CardButtonBar.vue"]
DH["utils.ts"]
DI["CardDateTime.vue"]
DK["CardMoreAction.vue"]
DP["CardMoreButton.vue"]
DQ["CardMoreOption.vue"]
DR["CardTimeProgress.vue"]
DS["DateSubTitle.vue"]
DT["PaperCard.vue"]
DX["PublishDate.vue"]
DZ["useParseState.ts"]
E0["index.ts"]
E1["useParseState.test.ts"]
end
subgraph E4["Chip"]
E5["Chip.vue"]
EC["chip-tv.ts"]
ED["MarkingTag.vue"]
EE["SharedItemTag.vue"]
EF["StatusTag.vue"]
EG["StudentSubmissionTag.vue"]
EH["SubjectTag.vue"]
EI["TeacherSubmissionTag.vue"]
EJ["index.ts"]
end
subgraph EK["Dialog"]
EL["AuthenticationErrorDialog.vue"]
EM["ErrorDialog.vue"]
EN["index.ts"]
end
subgraph EO["Divider"]
EP["Divider.vue"]
EQ["divider-tv.ts"]
ER["index.ts"]
end
subgraph ES["FieldSet"]
ET["FieldSet.vue"]
EU["index.ts"]
end
subgraph EV["Filter"]
EW["FilterDropDown.vue"]
EX["MultipleSelect.vue"]
F2["multiple-select-tv.ts"]
F3["SelectItem.vue"]
F4["select-item-tv.ts"]
F5["OwnerFilter.vue"]
F9["StatusFilter.vue"]
FA["Test.vue"]
FB["YearFilter.vue"]
FC["YearFilterV2.vue"]
FD["index.ts"]
end
subgraph FE["Footer"]
FF["Footer.vue"]
FG["FooterTemplate.vue"]
FI["footer-tv.ts"]
FJ["index.ts"]
end
subgraph FK["Header"]
FL["Header.vue"]
FM["HeaderTemplate.vue"]
FO["header-tv.ts"]
FP["index.ts"]
end
subgraph FQ["Icon"]
FR["Icon.vue"]
FS["index.ts"]
end
subgraph FT["IdentityBar"]
FU["IdentityBar.vue"]
FV["UserMenu.vue"]
FW["index.ts"]
end
subgraph FX["MenuItem"]
FY["Item.vue"]
G2["item-tv.ts"]
G3["SideNavItem.vue"]
G4["side-nav-item-tv.ts"]
G5["index.ts"]
G6["side-nav-item-tv.test.ts"]
end
subgraph G7["Option"]
G8["OptionItem.vue"]
G9["option-item-tv.ts"]
GA["TabButton.vue"]
GD["index.ts"]
end
subgraph GE["Page"]
GF["Page.vue"]
GG["index.ts"]
end
subgraph GH["Search"]
GI["Search.vue"]
GJ["index.ts"]
end
subgraph GK["SideNav"]
GL["NavItem.tsx"]
GM["SideNav.vue"]
GP["side-nav-tv.ts"]
GR["index.tsx"]
end
subgraph GS["Tabs"]
GT["PaperTabItem.vue"]
GV["PaperTabs.vue"]
GW["map-tab-model.ts"]
GX["Tabs.vue"]
GY["tabs-tv.ts"]
GZ["index.ts"]
end
subgraph H0["ThemeProvider"]
H1["default-theme.ts"]
H2["index.tsx"]
H3["theme-provider.tsx"]
H6["theme-provider.test.tsx"]
end
HB["index.ts"]
end
HC["index.ts"]
subgraph HD["organisms"]
HE["index.ts"]
end
subgraph HF["templates"]
HG["index.ts"]
subgraph HH["PaperContent"]
HI["index.ts"]
HJ["BcaTabContent.vue"]
HO["ControlBar.vue"]
subgraph HV["filtering"]
HW["index.ts"]
HX["filtering.ts"]
end
HY["utils.ts"]
HZ["MyPapersTabContent.vue"]
I1["NspTabContent.vue"]
I2["SharedPapersTabsContent.vue"]
IC["CardGrid.vue"]
ID["paper-triage.test.ts"]
subgraph IE["post-triage-processing"]
IF["post-triage-processing.ts"]
end
end
end
subgraph I3["pages"]
I4["index.ts"]
subgraph I5["student"]
I6["index.ts"]
I7["StudentMyPapers.vue"]
end
subgraph I8["teacher"]
I9["index.ts"]
IA["TeacherMyPapers.vue"]
end
end
end
subgraph IG["ui"]
subgraph IH["command"]
II["Command.vue"]
IJ["CommandDialog.vue"]
IL["CommandEmpty.vue"]
IM["CommandGroup.vue"]
IN["CommandInput.vue"]
IS["CommandItem.vue"]
IT["CommandList.vue"]
IU["CommandSeparator.vue"]
IV["CommandShortcut.vue"]
IW["index.ts"]
end
subgraph IX["dialog"]
IY["Dialog.vue"]
IZ["DialogClose.vue"]
J0["DialogContent.vue"]
J1["DialogDescription.vue"]
J2["DialogFooter.vue"]
J3["DialogHeader.vue"]
J4["DialogTitle.vue"]
J5["DialogTrigger.vue"]
J6["index.ts"]
end
subgraph J7["dropdown-menu"]
J8["DropdownMenu.vue"]
J9["DropdownMenuCheckboxItem.vue"]
JA["DropdownMenuContent.vue"]
JB["DropdownMenuGroup.vue"]
JC["DropdownMenuItem.vue"]
JD["DropdownMenuLabel.vue"]
JE["DropdownMenuRadioGroup.vue"]
JF["DropdownMenuRadioItem.vue"]
JG["DropdownMenuSeparator.vue"]
JH["DropdownMenuShortcut.vue"]
JI["DropdownMenuSub.vue"]
JJ["DropdownMenuSubContent.vue"]
JK["DropdownMenuSubTrigger.vue"]
JL["DropdownMenuTrigger.vue"]
JM["index.ts"]
end
JN["index.ts"]
subgraph JO["popover"]
JP["Popover.vue"]
JQ["PopoverContent.vue"]
JR["PopoverTrigger.vue"]
JS["index.ts"]
end
subgraph JT["select"]
JU["Select.vue"]
JV["SelectContent.vue"]
JW["SelectGroup.vue"]
JX["SelectItem.vue"]
JY["SelectItemText.vue"]
JZ["SelectLabel.vue"]
K0["SelectSeparator.vue"]
K1["SelectTrigger.vue"]
K2["SelectValue.vue"]
K3["index.ts"]
end
end
end
subgraph EY["@types"]
EZ["react"]
end
subgraph K6["~"]
subgraph K7["components"]
subgraph K8["star"]
subgraph K9["atom"]
KA["Header"]
subgraph N1["Card"]
N2["CardDateTime.vue"]
N4["CardMoreAction.vue"]
N6["CardTimeProgress.vue"]
end
end
end
end
end
subgraph KF["i18n"]
subgraph KG["en"]
KH["brand.ts"]
KI["errors.ts"]
KJ["header.ts"]
KK["index.ts"]
KL["paper.ts"]
KM["ui.ts"]
end
KN["i18n-instance.ts"]
KO["messages.ts"]
subgraph KP["zh"]
KQ["index.ts"]
KR["brand.ts"]
KS["errors.ts"]
KT["header.ts"]
KU["paper.ts"]
KV["ui.ts"]
end
KW["index.ts"]
end
subgraph KX["layouts"]
KY["default.vue"]
end
L1["nuxt.config.ts"]
subgraph L2["pages"]
L3["index.vue"]
L5["report.tsx"]
end
subgraph L6["services"]
subgraph L7["api"]
subgraph L8["__tests__"]
L9["zod-parse-params.test.ts"]
end
LA["index.ts"]
LB["jwt.ts"]
LQ["load-meta.ts"]
LR["load-teacher-paper.ts"]
LS["load-student-paper.ts"]
LT["recall-paper.ts"]
LU["save-user-preference.ts"]
LV["utils.ts"]
end
subgraph LC["axios"]
LD["index.ts"]
LE["axios-instance.ts"]
subgraph LX["__tests__"]
LY["api-params-transform.test.ts"]
end
end
subgraph LJ["models"]
LK["index.ts"]
LL["common.ts"]
LM["error.ts"]
LN["jwt.ts"]
LO["meta.ts"]
LP["paper.ts"]
end
subgraph LZ["composites"]
subgraph M0["edit-paper"]
M1["edit-paper.test.ts"]
M2["edit-paper.ts"]
M3["index.ts"]
end
M4["index.ts"]
subgraph M5["load-paper"]
M6["index.ts"]
M7["useLoadPaperQuery.ts"]
MA["usePaperGroupByTab.ts"]
MC["usePaperTabs.ts"]
MH["useOwner.ts"]
MJ["useTriagePaper.ts"]
end
subgraph ME["use-role"]
MF["index.ts"]
MG["useRole.ts"]
end
end
MK["index.ts"]
end
subgraph NI["#storybook"]
NJ["blocks"]
end
P0["tailwind.config.js"]
P4["chroma-js"]
PB["vitest.config.ts"]
2-->3
2-->7
8-->D
8-->I
8-->J
8-->K
8-->L
8-->M
8-->N
8-->O
8-->R
8-->U
8-->X
8-->Z
8-->11
8-->13
8-->15
8-->17
8-->19
8-->1B
8-->1D
8-->1F
8-->1H
8-->1J
8-->1L
8-->1N
8-->1P
8-->1R
8-->1T
1V-->27
1V-->2C
1V-->2F
1V-->2I
1V-->2L
1V-->2N
1V-->2Q
1V-->2T
1V-->2W
1V-->2Z
1V-->32
1V-->35
1V-->38
1V-->3B
1V-->3E
1V-->3I
1V-->3L
1V-->3O
1V-->3Q
1V-->3T
1V-->3V
1V-->3W
1V-->3X
1V-->3Y
1V-->3Z
1V-->40
44-->50
44-->54
44-->5D
44-->5G
44-->5J
44-->5P
44-->60
44-->66
44-->48
44-->4D
44-->4I
44-->4J
44-->6B
44-->6G
44-->6I
44-->6M
44-->6N
44-->78
44-->79
44-->7G
44-->7H
44-->4N
44-->4Q
44-->3
44-->4R
44-->4T
44-->4V
44-->4Y
50-->53
54-->5A
54-->5C
54-->4V
5D-->5F
5D-->5F
5G-->5I
5G-->4Q
5G-->4V
5J-->5L
5J-->4Q
5J-->5O
5P-->5R
5P-->4Q
5P-->5U
5P-->5V
5P-->5W
5P-->5Z
5P-->4V
60-->62
60-->4V
60-->4V
60-->65
66-->68
66-->5U
66-->69
6B-->6C
6C-->6F
6G-->6F
6G-->4V
6I-->6L
6N-->6P
6N-->3W
6N-->3Z
6P-->70
6P-->6T
6P-->6U
6P-->5F
6P-->6Y
70-->72
70-->76
70-->77
72-->75
72-->5F
78-->4V
79-->7C
79-->7F
79-->4V
7G-->5Z
7I-->7J
7I-->7M
7I-->7Q
7I-->7R
7I-->7S
7I-->7U
7I-->7V
7I-->7W
7I-->7X
7I-->7Y
7I-->75
7I-->80
7I-->83
7I-->85
7I-->86
7I-->87
7I-->88
7I-->89
7I-->8A
7I-->8B
7I-->8C
7I-->8E
7I-->8H
7I-->8I
8O-->7
8O-->8P
8Q-->50
8Q-->54
8Q-->5D
8Q-->5G
8Q-->5J
8Q-->5P
8Q-->60
8Q-->66
8Q-->48
8Q-->4D
8Q-->4I
8Q-->8R
8Q-->8S
8Q-->8T
8Q-->8V
8Q-->4J
8Q-->8W
8Q-->6B
8Q-->6G
8Q-->6I
8Q-->6M
8Q-->6N
8Q-->78
8Q-->79
8Q-->7G
8Q-->7H
8Q-->8X
8Q-->4T
8Q-->4V
8X-->8H
8Y-->4V
8Z-->8H
90-->7
91-->94
91-->98
91-->9C
91-->9D
91-->9E
9F-->9M
9F-->9E
9F-->9L
9F-->8P
9M-->7J
9M-->7M
9M-->7Q
9M-->7R
9M-->7S
9M-->7U
9M-->75
9M-->8P
9M-->83
9N-->9O
9N-->9P
9Q-->90
9Q-->91
9Q-->9N
9R-->9T
9R-->9U
9R-->9V
9R-->9W
9R-->9Y
9R-->A0
9R-->A1
9R-->A2
9R-->A4
9R-->A6
9R-->A7
9R-->A9
9R-->AC
9R-->3
A9-->AB
A9-->3
AC-->3
AC-->AF
AJ-->AL
AM-->AL
AO-->AP
AO-->AT
AO-->AL
AU-->AJ
AU-->AM
AU-->AO
AU-->AW
AW-->AZ
B0-->6N
B0-->B4
B0-->B7
B0-->6T
B0-->BB
B0-->BE
B0-->BH
BI-->BM
BI-->BL
BM-->BP
BM-->BS
BT-->CC
BT-->BV
BT-->BW
BT-->BM
BT-->BY
BT-->AA
BT-->5H
BT-->C1
BT-->AZ
BT-->C3
BT-->5F
BT-->5F
BT-->C5
BT-->C7
BT-->C9
BT-->CB
BT-->5O
CC-->CD
CE-->CG
CE-->CH
CE-->CI
CQ-->11
CQ-->1L
CR-->CQ
CT-->CV
CT-->CW
CT-->CX
CT-->CY
CT-->CZ
D0-->CT
D2-->X
D2-->4V
D3-->D2
D5-->D7
D5-->D6
D5-->5B
D5-->Z
D7-->5Q
D7-->5R
D7-->Z
D7-->5Z
D8-->5Q
D8-->5R
D8-->5Z
D9-->D5
D9-->D5
DB-->DD
DB-->DC
DD-->DE
DD-->DE
DD-->5B
DD-->5O
DF-->4V
DG-->DD
DG-->DD
DG-->DH
DG-->DC
DH-->DD
DI-->DJ
DI-->5B
DI-->5B
DI-->5O
DK-->DP
DK-->DL
DK-->DN
DK-->DO
DK-->4V
DP-->DE
DQ-->D6
DR-->D6
DR-->5B
DR-->5B
DR-->68
DR-->4V
DR-->5O
DS-->5B
DS-->DC
DS-->5O
DT-->DF
DT-->DG
DT-->DK
DT-->DR
DT-->DX
DT-->DZ
DT-->5B
DT-->DV
DT-->DC
DT-->DW
DT-->5O
DX-->5B
DX-->DC
DX-->DY
DZ-->DG
DZ-->DC
DZ-->4Q
DZ-->4V
E0-->DD
E0-->DG
E0-->DR
E0-->DT
E1-->DG
E1-->DZ
E1-->6L
E1-->E3
E5-->EC
E5-->5B
E5-->E9
E5-->EB
EC-->5Q
EC-->5R
EC-->EB
EC-->EB
ED-->E5
ED-->E5
ED-->5B
ED-->5O
EE-->E5
EE-->E5
EF-->E5
EF-->E5
EF-->5B
EF-->4Q
EF-->5O
EH-->E5
EH-->E5
EH-->DC
EJ-->E5
EJ-->E5
EJ-->ED
EJ-->ED
EJ-->EF
EJ-->EF
EJ-->EH
EM-->D9
EN-->EM
EP-->EQ
EP-->5B
EP-->15
EP-->4V
EQ-->5R
ER-->EP
ER-->EP
ET-->5B
ET-->5Q
ET-->1B
ET-->1B
EU-->ET
EU-->ET
EX-->F2
EX-->F3
EX-->5B
EX-->E9
EX-->EZ
EX-->4Q
EX-->Z
EX-->F1
EX-->1H
EX-->1N
EX-->4V
F2-->5R
F2-->F1
F2-->1H
F2-->1N
F3-->F4
F3-->5B
F3-->E9
F3-->15
F3-->1H
F4-->EX
F4-->5R
F4-->F1
F4-->1H
F4-->1N
F5-->F6
F5-->F7
F5-->F8
F5-->DC
F5-->5Q
F5-->DO
F5-->4V
F5-->5O
F9-->F8
F9-->DC
F9-->DO
FA-->1N
FA-->4V
FB-->F6
FB-->F7
FB-->5Q
FB-->CI
FB-->4V
FC-->F8
FC-->DO
FD-->EX
FF-->FG
FF-->5B
FF-->4Q
FF-->4V
FF-->5O
FG-->FI
FG-->FH
FG-->5B
FG-->15
FG-->4V
FI-->5R
FJ-->FF
FJ-->FG
FJ-->FG
FL-->FM
FL-->FM
FL-->4Q
FL-->4V
FL-->5O
FL-->8H
FM-->FO
FM-->FN
FM-->5B
FM-->E9
FM-->1J
FO-->5R
FO-->1J
FP-->FL
FR-->E9
FS-->FR
FU-->FV
FU-->FV
FU-->5B
FU-->E9
FU-->DN
FU-->Z
FU-->15
FU-->4V
FU-->5O
FV-->DC
FV-->4Q
FV-->DO
FV-->1H
FV-->1H
FV-->4V
FV-->4V
FV-->5O
FW-->FU
FW-->FV
FY-->G2
FY-->G1
G2-->5R
G3-->FY
G3-->G4
G3-->4V
G4-->G2
G4-->5R
G5-->FY
G6-->G4
G6-->E3
G8-->G9
G8-->D6
G8-->5B
G9-->5Q
GA-->G8
GA-->GC
GA-->4V
GD-->G9
GD-->G8
GD-->GA
GG-->GF
GI-->DO
GI-->1F
GI-->4V
GJ-->GI
GL-->Z
GL-->Z
GL-->4V
GM-->GP
GM-->GO
GM-->E9
GM-->G1
GP-->GQ
GP-->5R
GR-->GM
GT-->5B
GT-->GU
GT-->GU
GT-->4V
GV-->GD
GV-->GW
GV-->GT
GV-->GX
GV-->GX
GV-->5K
GV-->4V
GV-->5O
GW-->GV
GW-->DC
GX-->GY
GX-->5B
GX-->G1
GX-->G1
GX-->4V
GY-->5Q
GZ-->GT
GZ-->GV
GZ-->GX
H1-->5H
H2-->H3
H3-->H1
H3-->H4
H3-->H5
H3-->4V
H6-->H3
H6-->HA
H6-->E3
H6-->4V
HB-->CR
HB-->D0
HB-->D3
HB-->D9
HB-->E0
HB-->EJ
HB-->EN
HB-->ER
HB-->EU
HB-->FD
HB-->FJ
HB-->FP
HB-->FS
HB-->FW
HB-->GG
HB-->GJ
HB-->GZ
HB-->H2
HC-->HB
HC-->HE
HC-->HG
HG-->HI
HI-->HJ
HI-->HO
HI-->HZ
HI-->I1
HI-->I2
HJ-->HO
HJ-->HW
HJ-->HY
HJ-->HL
HJ-->HM
HJ-->DC
HJ-->DM
HJ-->HN
HJ-->5U
HJ-->69
HJ-->DY
HJ-->5W
HJ-->4V
HO-->DC
HO-->DN
HO-->HP
HO-->HQ
HO-->HR
HO-->HS
HO-->HT
HO-->HU
HO-->4V
HW-->HX
HW-->HX
HX-->DC
HX-->HN
HX-->5U
HX-->69
HX-->DY
HX-->5W
HY-->HN
HY-->5U
HY-->69
HZ-->HO
HZ-->HW
HZ-->HY
HZ-->I0
HZ-->HL
HZ-->HM
HZ-->DC
HZ-->4Q
HZ-->DM
HZ-->HN
HZ-->5U
HZ-->69
HZ-->DY
HZ-->5W
HZ-->4V
HZ-->5O
I1-->HO
I1-->HY
I1-->HL
I1-->HM
I1-->DC
I1-->DM
I1-->5U
I1-->69
I1-->4V
I2-->HO
I2-->HY
I2-->HL
I2-->HM
I2-->DC
I2-->DM
I2-->5U
I2-->69
I2-->4V
I4-->I6
I4-->I9
I6-->I7
I7-->57
I7-->5K
I7-->DU
I7-->DM
I7-->4V
I9-->IA
IA-->57
IA-->5B
IA-->5K
IA-->IB
IA-->DU
IA-->I0
IA-->4Q
IA-->DM
IA-->4V
IA-->65
II-->5Q
II-->G1
II-->G1
IJ-->II
IJ-->IK
IJ-->G1
IJ-->G1
IL-->5Q
IL-->G1
IL-->G1
IM-->5Q
IM-->G1
IM-->G1
IN-->5Q
IN-->IR
IN-->G1
IS-->5Q
IS-->G1
IS-->G1
IT-->5Q
IT-->G1
IT-->G1
IU-->5Q
IU-->G1
IU-->G1
IV-->5Q
IW-->II
IW-->IJ
IW-->IL
IW-->IM
IW-->IN
IW-->IS
IW-->IT
IW-->IU
IW-->IV
IY-->G1
IZ-->G1
J0-->5Q
J0-->IR
J0-->G1
J1-->5Q
J1-->G1
J2-->5Q
J3-->5Q
J4-->5Q
J4-->G1
J5-->G1
J6-->IY
J6-->IZ
J6-->J0
J6-->J1
J6-->J2
J6-->J3
J6-->J4
J6-->J5
J8-->G1
J9-->5Q
J9-->IR
J9-->G1
JA-->5Q
JA-->G1
JB-->G1
JC-->5Q
JC-->G1
JD-->5Q
JD-->G1
JE-->G1
JF-->5Q
JF-->IR
JF-->G1
JG-->G1
JH-->5Q
JI-->G1
JJ-->5Q
JJ-->G1
JK-->5Q
JK-->IR
JK-->G1
JL-->G1
JM-->J8
JM-->J9
JM-->JA
JM-->JB
JM-->JC
JM-->JD
JM-->JE
JM-->JF
JM-->JG
JM-->JH
JM-->JI
JM-->JJ
JM-->JK
JM-->JL
JM-->G1
JN-->JM
JP-->G1
JP-->G1
JQ-->5Q
JQ-->G1
JR-->G1
JS-->JP
JS-->JQ
JS-->JR
JU-->G1
JU-->G1
JV-->5Q
JV-->G1
JW-->5Q
JW-->G1
JX-->5Q
JX-->DM
JX-->G1
JY-->G1
JZ-->5Q
JZ-->G1
K0-->5Q
K0-->G1
K1-->5Q
K1-->DM
K1-->G1
K2-->G1
K3-->JU
K3-->JV
K3-->JW
K3-->JX
K3-->JY
K3-->JZ
K3-->K0
K3-->K1
K3-->K2
K4-->50
K4-->5G
K4-->5J
K4-->5P
K4-->60
K4-->66
K5-->5P
K5-->5R
K5-->HA
K5-->KA
K5-->E3
K5-->4V
KB-->66
KB-->E3
KK-->KH
KK-->KI
KK-->KJ
KK-->KL
KK-->KM
KN-->KO
KN-->5O
KO-->KK
KO-->KQ
KQ-->KR
KQ-->KS
KQ-->KT
KQ-->KU
KQ-->KV
KW-->KN
KW-->KO
KY-->57
KY-->5B
KY-->5L
KY-->19
KY-->L0
KY-->4V
L1-->6P
L3-->5K
L3-->L4
L5-->4V
L9-->E3
LA-->LB
LA-->LQ
LA-->LR
LB-->LD
LB-->LK
LB-->5U
LB-->69
LB-->AF
LB-->AF
LD-->LE
LE-->LI
LE-->6L
LK-->LL
LK-->LM
LK-->LN
LK-->LO
LK-->LP
LL-->65
LM-->LL
LN-->LM
LO-->LL
LP-->LL
LP-->LL
LP-->65
LQ-->LD
LQ-->LK
LQ-->LB
LQ-->5U
LQ-->69
LQ-->4V
LQ-->AF
LQ-->AF
LR-->LD
LR-->LK
LR-->LK
LR-->LB
LR-->LQ
LR-->5U
LR-->69
LR-->4V
LR-->AF
LR-->AF
LR-->65
LS-->LD
LS-->LK
LS-->LB
LS-->LQ
LS-->5U
LS-->69
LS-->4V
LS-->AF
LS-->AF
LS-->65
LU-->LD
LU-->65
LV-->LK
LV-->HN
LV-->5U
LV-->5W
LV-->LW
LY-->E3
M1-->M2
M1-->CF
M1-->E3
M2-->LK
M2-->AA
M2-->CF
M2-->5U
M2-->65
M3-->M2
M4-->M6
M4-->MF
M6-->M7
M6-->MA
M6-->MC
M7-->5L
M7-->M8
M7-->M9
M7-->DC
M7-->4Q
M7-->4V
M7-->AF
M7-->AF
MA-->DC
MA-->5U
MA-->MB
MC-->M7
MC-->DC
MC-->4Q
MC-->HN
MC-->5U
MC-->5W
MC-->MD
MC-->4V
MF-->MG
MG-->LQ
MG-->4Q
MG-->4V
MH-->M7
MH-->DC
MH-->4Q
MH-->HN
MH-->MI
MH-->5U
MH-->69
MH-->5W
MH-->MD
MH-->4V
MJ-->DC
MJ-->68
MJ-->68
MJ-->5U
MJ-->MB
MK-->LA
MK-->LD
MK-->M4
MK-->LK
ML-->MN
ML-->AZ
MO-->MQ
MO-->AZ
MR-->DE
MR-->AZ
MS-->MT
MS-->MU
MS-->MV
MS-->MW
MS-->AZ
MS-->6L
MX-->MY
MX-->AZ
MZ-->57
MZ-->AZ
N0-->AZ
N0-->N2
N3-->DC
N3-->AZ
N3-->N4
N5-->AZ
N5-->N6
N5-->68
N7-->N8
N7-->AZ
N9-->57
N9-->AZ
NA-->57
NA-->AZ
NB-->57
NB-->AZ
NC-->NE
NC-->AZ
NF-->NH
NF-->AA
NF-->AZ
NF-->NJ
NK-->57
NK-->AZ
NL-->57
NL-->57
NL-->AZ
NM-->NN
NM-->B7
NO-->NQ
NO-->AZ
NR-->NS
NR-->AZ
NT-->NU
NT-->AZ
NV-->NW
NV-->AZ
NX-->57
NX-->AZ
NY-->NZ
NY-->AZ
O0-->57
O0-->AZ
O1-->O2
O1-->AZ
O3-->NE
O3-->AZ
O4-->O5
O4-->AZ
O6-->O7
O6-->AZ
O8-->57
O8-->57
O8-->AZ
O9-->57
O9-->57
O9-->AZ
O9-->4V
OA-->NS
OA-->AZ
OB-->57
OB-->AZ
OC-->AZ
OC-->K8
OD-->OF
OD-->AZ
OG-->OH
OG-->AZ
OI-->OJ
OI-->AZ
OL-->AZ
OS-->OP
OS-->OQ
OS-->OT
OS-->OU
OS-->OV
OZ-->OS
P0-->P2
P3-->P4
P5-->P8
P9-->6I
P9-->79
P9-->7G
P9-->7H
PA-->7G
PA-->E3
PB-->6N
PB-->PE
PB-->BB
PB-->PI
PB-->E3
