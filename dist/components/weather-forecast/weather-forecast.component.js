import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastMode, WeatherSettings } from '../../weather.interfaces';
var WeatherForecastComponent = /** @class */ (function () {
    function WeatherForecastComponent() {
        this.isGridForecast = true;
    }
    Object.defineProperty(WeatherForecastComponent.prototype, "mode", {
        set: function (value) {
            if (!value) {
                return;
            }
            switch (value) {
                case ForecastMode.GRID:
                    this.isGridForecast = true;
                    break;
                case ForecastMode.DETAILED:
                    this.isGridForecast = false;
                    break;
                default:
                    this.isGridForecast = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeatherForecastComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], WeatherForecastComponent.prototype, "mode", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", WeatherSettings)
    ], WeatherForecastComponent.prototype, "settings", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], WeatherForecastComponent.prototype, "forecast", null);
    WeatherForecastComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-forecast',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      :host {\n        margin-top: 1em;\n        display: block;\n        width: 100%;\n        box-sizing: border-box;\n      }\n    "
            ],
            template: "\n    <weather-forecast-simple-grid\n      *ngIf=\"isGridForecast\"\n      [forecast]=\"forecast\"\n    ></weather-forecast-simple-grid>\n    <weather-forecast-detailed\n      *ngIf=\"!isGridForecast\"\n      [settings]=\"settings\"\n      [forecast]=\"forecast\"\n    ></weather-forecast-detailed>\n  "
        })
    ], WeatherForecastComponent);
    return WeatherForecastComponent;
}());
export { WeatherForecastComponent };
//# sourceMappingURL=weather-forecast.component.js.map