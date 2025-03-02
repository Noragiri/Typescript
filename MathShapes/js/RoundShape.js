"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundShape = void 0;
class RoundShape {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getVolume() {
        return 4 / 3 * Math.PI * Math.pow(this.radius, 3);
    }
    getSurfaceArea() {
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }
}
exports.RoundShape = RoundShape;
