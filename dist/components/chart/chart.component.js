import * as tslib_1 from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
var ChartComponent = /** @class */ (function () {
    function ChartComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.options.scales = {
            yAxes: [
                {
                    ticks: {
                        // Remove excess decimal places
                        callback: function (value, index, values) {
                            return Number(value.toFixed(0));
                        }
                    }
                }
            ]
        };
        this.chart = new Chart(this.elementRef.nativeElement.querySelector('canvas'), {
            type: this.type,
            data: this.data,
            options: this.options
        });
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.chart && changes['data']) {
            var currentValue_1 = changes['data'].currentValue;
            ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(function (property) {
                _this.chart.data[property] = currentValue_1[property];
            });
            this.chart.update();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ChartComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponent.prototype, "options", void 0);
    ChartComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-chart',
            template: '<canvas></canvas>',
            styles: [':host { display: block; }']
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=chart.component.js.map