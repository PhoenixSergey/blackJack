"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var forms_1 = require("@angular/forms");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                kendo_angular_grid_1.GridModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                common_1.CommonModule,
                kendo_angular_buttons_1.ButtonsModule,
                forms_1.FormsModule
            ],
            declarations: [],
            exports: [
                kendo_angular_grid_1.GridModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                common_1.CommonModule,
                kendo_angular_buttons_1.ButtonsModule,
                forms_1.FormsModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map