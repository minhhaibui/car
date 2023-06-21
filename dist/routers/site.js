"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const siteController_1 = __importDefault(require("../app/controllers/siteController"));
const router = (0, express_1.Router)();
router.get("/", siteController_1.default.products);
router.get("/chitetsosanh", siteController_1.default.chitietsosanh);
router.get("/login", (req, res) => {
    res.render("account/login");
});
router.get("/singup", (req, res) => {
    res.render("account/singup");
});
router.get("/datxemxe", siteController_1.default.datxemxe);
// router.get("/collections/:slug", siteController.selectCollections);
// router.get("/collections", siteController.collections);
router.get("/admin", (req, res) => {
    res.render("admin/admin", { title: "ADMIN", layout: "admin" });
});
router.get("/admin/products/add-product", (req, res) => {
    res.render("admin/form-add-product", { title: "add", layout: "admin" });
});
router.get("/admin/products", (req, res) => {
    res.render("admin/table-data-product", {
        title: "add Product",
        layout: "admin",
    });
});
exports.default = router;
