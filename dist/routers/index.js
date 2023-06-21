"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const site_1 = __importDefault(require("./site"));
// import testRouter from "./test";
const auth_1 = __importDefault(require("./auth"));
const admin_1 = __importDefault(require("./admin"));
function router(app) {
    app.use("/admin", admin_1.default);
    app.use("/account", auth_1.default);
    // app.use("/test", testRouter);
    app.use("/", site_1.default);
    // app.use("/", blogRouter);
    // app.use("/", supportRouter);
    // app.use("/products", productRouter);
    // app.use("/cart", Cart);
}
exports.default = router;
