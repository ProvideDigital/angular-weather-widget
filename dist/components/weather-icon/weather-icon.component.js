import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var WeatherIconComponent = /** @class */ (function () {
    function WeatherIconComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeatherIconComponent.prototype, "iconClass", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeatherIconComponent.prototype, "iconImageUrl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeatherIconComponent.prototype, "title", void 0);
    WeatherIconComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-icon',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""],
            template: "\n    <i *ngIf=\"iconClass\" [class]=\"iconClass\"></i>\n    <img *ngIf=\"iconImageUrl && !iconClass\" [src]=\"iconImageUrl\" />\n  "
        })
    ], WeatherIconComponent);
    return WeatherIconComponent;
}());
export { WeatherIconComponent };
//# sourceMappingURL=weather-icon.component.js.map