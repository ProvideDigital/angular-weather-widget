import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var WeatherLocationComponent = /** @class */ (function () {
    function WeatherLocationComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeatherLocationComponent.prototype, "place", void 0);
    WeatherLocationComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-location',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      :host {\n        margin-top: 1em;\n        font-size: 1em;\n      }\n    "
            ],
            template: "\n    {{ place }}\n  "
        })
    ], WeatherLocationComponent);
    return WeatherLocationComponent;
}());
export { WeatherLocationComponent };
//# sourceMappingURL=weather-location.component.js.map