import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var WeatherCurrentDescriptionComponent = /** @class */ (function () {
    function WeatherCurrentDescriptionComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeatherCurrentDescriptionComponent.prototype, "descripion", void 0);
    WeatherCurrentDescriptionComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-current-description',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      :host {\n        display: block;\n        text-align: center;\n      }\n    "
            ],
            template: "\n    {{ descripion | uppercase }}\n  "
        })
    ], WeatherCurrentDescriptionComponent);
    return WeatherCurrentDescriptionComponent;
}());
export { WeatherCurrentDescriptionComponent };
//# sourceMappingURL=weather-current-description.component.js.map