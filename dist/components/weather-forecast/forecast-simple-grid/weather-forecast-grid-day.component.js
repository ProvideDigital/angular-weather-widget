import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var WeatherForecastGridDayComponent = /** @class */ (function () {
    function WeatherForecastGridDayComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], WeatherForecastGridDayComponent.prototype, "forecast", void 0);
    WeatherForecastGridDayComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-forecast-grid-day',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      :host {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.2em;\n      }\n      weather-icon {\n        font-size: 1.4em;\n      }\n      .day {\n        font-size: 0.8em;\n      }\n    "
            ],
            template: "\n    <weather-icon [iconClass]=\"forecast?.iconClass\"></weather-icon>\n    <weather-current-temperature\n      [temp]=\"forecast?.temp\"\n    ></weather-current-temperature>\n    <div class=\"day\">{{ forecast?.data | date: 'EEE' }}</div>\n  "
        })
    ], WeatherForecastGridDayComponent);
    return WeatherForecastGridDayComponent;
}());
export { WeatherForecastGridDayComponent };
//# sourceMappingURL=weather-forecast-grid-day.component.js.map