import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
import { WeatherSettings } from '../../../weather.interfaces';
var WeatherForecastDetailedComponent = /** @class */ (function () {
    function WeatherForecastDetailedComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
        this.forecastPerDay = [];
    }
    Object.defineProperty(WeatherForecastDetailedComponent.prototype, "forecast", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
            this.forecastPerDay = this.weatherHelpers.groupForecastsByDay(value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], WeatherForecastDetailedComponent.prototype, "forecast", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", WeatherSettings)
    ], WeatherForecastDetailedComponent.prototype, "settings", void 0);
    WeatherForecastDetailedComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-forecast-detailed',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""],
            template: "\n    <ng-container *ngFor=\"let forecast of forecastPerDay\">\n      <weather-forecast-detail-day\n        [settings]=\"settings\"\n        [forecast]=\"forecast\"\n      ></weather-forecast-detail-day>\n    </ng-container>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [WeatherHelpersService])
    ], WeatherForecastDetailedComponent);
    return WeatherForecastDetailedComponent;
}());
export { WeatherForecastDetailedComponent };
//# sourceMappingURL=forecast-detailed.component.js.map