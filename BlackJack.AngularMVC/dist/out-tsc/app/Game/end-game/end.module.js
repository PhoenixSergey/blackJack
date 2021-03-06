"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var end_game_component_1 = require("src/app/Game/end-game/end-game-component/end-game.component");
var end_routing_module_1 = require("./end-routing.module");
var shared_module_1 = require("src/shared/shared.module");
var EndModule = /** @class */ (function () {
    function EndModule() {
    }
    EndModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                end_routing_module_1.EndRoutingModule
            ],
            declarations: [end_game_component_1.EndGameComponent]
        })
    ], EndModule);
    return EndModule;
}());
exports.EndModule = EndModule;
//# sourceMappingURL=end.module.js.map