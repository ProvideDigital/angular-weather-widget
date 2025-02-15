import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
import { WeatherSettings } from '../../../weather.interfaces';
var WeatherForecastDetailDayComponent = /** @class */ (function () {
    function WeatherForecastDetailDayComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
    }
    Object.defineProperty(WeatherForecastDetailDayComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            this._forecast = value;
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastDetailDayComponent.prototype.ngOnChanges = function (change) {
        if (this.settings && change['forecast']) {
            this.updateChartOptions();
            this.chartData = this.weatherHelpers.mapForecastToCharts(this._forecast, this.settings.color);
        }
    };
    WeatherForecastDetailDayComponent.prototype.updateChartOptions = function () {
        this.chartOptions = {
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'hour',
                            isoWeekday: true,
                            displayFormats: {
                                hour: 'hA'
                            },
                            tooltipFormat: 'LLL'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: true,
                            fontColor: this.settings && this.settings.color
                                ? this.weatherHelpers.hexToRgbA(this.settings.color, '0.8')
                                : 'white',
                            fontSize: 9,
                            maxTicksLimit: 3
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: this.settings && this.settings.color
                                ? this.weatherHelpers.hexToRgbA(this.settings.color, '0.8')
                                : 'white',
                            fontSize: 9,
                            autoSkip: true,
                            labelOffset: 0,
                            mirror: false,
                            maxTicksLimit: 3,
                            callback: function (value, index, values) {
                                return value;
                            }
                        }
                    }
                ]
            },
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            },
            title: {
                display: false
            }
        };
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", WeatherSettings)
    ], WeatherForecastDetailDayComponent.prototype, "settings", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], WeatherForecastDetailDayComponent.prototype, "forecast", null);
    WeatherForecastDetailDayComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-forecast-detail-day',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      :host {\n        display: flex;\n        align-items: center;\n        padding: 0.1em 0;\n        font-size: 1em;\n        box-sizing: border-box;\n        justify-content: flex-start;\n        width: 100%;\n      }\n      :host > * {\n        padding: 0 0.4em;\n      }\n      .left {\n        flex-grow: 0;\n      }\n      weather-chart {\n        height: 80px;\n        width: 80%;\n        flex: 1 1;\n      }\n\n      weather-icon {\n        margin-top: 0.3em;\n        font-size: 1.4em;\n        display: block;\n      }\n    "
            ],
            template: "\n    <div class=\"left\">\n      {{ forecast[0]?.data | date: 'EEE' }}\n      <weather-icon [iconClass]=\"forecast[0]?.iconClass\"></weather-icon>\n    </div>\n    <weather-chart\n      [type]=\"'line'\"\n      [data]=\"chartData\"\n      [options]=\"chartOptions\"\n    ></weather-chart>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [WeatherHelpersService])
    ], WeatherForecastDetailDayComponent);
    return WeatherForecastDetailDayComponent;
}());
export { WeatherForecastDetailDayComponent };
//# sourceMappingURL=forecast-detailed-day.component.js.map