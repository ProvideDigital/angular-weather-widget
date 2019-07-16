import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var WeatherCurrentTempComponent = /** @class */ (function () {
    function WeatherCurrentTempComponent() {
        this._deg = TemperatureScale.CELCIUS;
    }
    Object.defineProperty(WeatherCurrentTempComponent.prototype, "deg", {
        get: function () {
            return this._deg;
        },
        set: function (value) {
            this._deg = value;
            switch (value) {
                case TemperatureScale.CELCIUS:
                    this.unitSymbol = 'C';
                    break;
                case TemperatureScale.FAHRENHEIT:
                    this.unitSymbol = 'F';
                    break;
                case TemperatureScale.KELVIN:
                    this.unitSymbol = 'K';
                    break;
                default:
                    this.unitSymbol = 'C';
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeatherCurrentTempComponent.prototype, "temp", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], WeatherCurrentTempComponent.prototype, "deg", null);
    WeatherCurrentTempComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-current-temperature',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      :host {\n        display: block;\n        line-height: 1.1em;\n      }\n      .deg {\n        letter-spacing: -0.13em;\n        position: relative;\n        left: -0.2em;\n      }\n    "
            ],
            template: "\n    {{ temp?.toFixed() }}\n    <span *ngIf=\"temp\" class=\"deg\">&deg; {{ unitSymbol }}</span>\n  "
        })
    ], WeatherCurrentTempComponent);
    return WeatherCurrentTempComponent;
}());
export { WeatherCurrentTempComponent };
export var TemperatureScale;
(function (TemperatureScale) {
    TemperatureScale[TemperatureScale["CELCIUS"] = 'celcius'] = "CELCIUS";
    TemperatureScale[TemperatureScale["KELVIN"] = 'kelvin'] = "KELVIN";
    TemperatureScale[TemperatureScale["FAHRENHEIT"] = 'fahrenheit'] = "FAHRENHEIT";
})(TemperatureScale || (TemperatureScale = {}));
//# sourceMappingURL=current-temperature.component.js.map