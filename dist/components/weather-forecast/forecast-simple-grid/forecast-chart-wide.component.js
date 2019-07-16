import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
var WeatherForecastChartWideComponent = /** @class */ (function () {
    function WeatherForecastChartWideComponent(helpers) {
        this.helpers = helpers;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], WeatherForecastChartWideComponent.prototype, "forecast", void 0);
    WeatherForecastChartWideComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-forecast-chart-wide',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""],
            template: "\n    <div></div>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [WeatherHelpersService])
    ], WeatherForecastChartWideComponent);
    return WeatherForecastChartWideComponent;
}());
export { WeatherForecastChartWideComponent };
//# sourceMappingURL=forecast-chart-wide.component.js.map