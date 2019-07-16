import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
var WeatherForecastSimpleGridComponent = /** @class */ (function () {
    function WeatherForecastSimpleGridComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
    }
    Object.defineProperty(WeatherForecastSimpleGridComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
            this.forecastPerDay = this.weatherHelpers.reduceToAveragePerDay(this._forecast);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], WeatherForecastSimpleGridComponent.prototype, "forecast", null);
    WeatherForecastSimpleGridComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-forecast-simple-grid',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      :host {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n      }\n      weather-forecast-grid-day {\n        margin: 0 0.4em;\n      }\n    "
            ],
            template: "\n    <ng-container *ngFor=\"let forecast of forecastPerDay\">\n      <weather-forecast-grid-day\n        [forecast]=\"forecast\"\n      ></weather-forecast-grid-day>\n    </ng-container>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [WeatherHelpersService])
    ], WeatherForecastSimpleGridComponent);
    return WeatherForecastSimpleGridComponent;
}());
export { WeatherForecastSimpleGridComponent };
//# sourceMappingURL=forecast-simple-grid.component.js.map