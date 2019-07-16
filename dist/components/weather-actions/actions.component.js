import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
var WeatherActionsComponent = /** @class */ (function () {
    function WeatherActionsComponent() {
        this.update = new EventEmitter();
    }
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], WeatherActionsComponent.prototype, "update", void 0);
    WeatherActionsComponent = tslib_1.__decorate([
        Component({
            selector: 'weather-actions',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [
                "\n      button {\n        border: none;\n        background: transparent;\n        cursor: pointer;\n        font-size: 1.6em;\n        border-radius: 50%;\n        color: inherit;\n      }\n      button:hover {\n        background: rgba(0, 0, 0, 0.1);\n      }\n    "
            ],
            template: "\n    <button (click)=\"update.emit()\"><i class=\"wi wi-refresh\"></i></button>\n  "
        })
    ], WeatherActionsComponent);
    return WeatherActionsComponent;
}());
export { WeatherActionsComponent };
//# sourceMappingURL=actions.component.js.map