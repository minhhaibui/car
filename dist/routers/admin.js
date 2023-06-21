"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = __importDefault(require("../app/controllers/admin.controller"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// import manageInvoiceController from "../app/controllers/manageInvoiceController";
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, path_1.default.resolve("src/public/upload"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + file.originalname;
        return cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
// import checkMiddlerWares from "../middlewares/middlewearAdmin";
const router = (0, express_1.Router)();
//statistical
// router.get("/statistical", adminController.statistical);
//categories
// router.delete("/categories/delete-category", adminController.destroyCategories);
// router.put(
//   "/categories/edit-category",
//   upload.single("imgUpload"),
//   adminController.updateCategories
// );
// router.get("/categories/edit-category", adminController.editCategories);
// router.post("/categories/add-category", adminController.storeCategories);
// router.get("/categories/add-category", adminController.createCategories);
// router.get("/categories", adminController.categories);
//products
router.post("/products/add-product", upload.single("imgUpload"), admin_controller_1.default.storeProduct);
router.delete("/products/delete-product", admin_controller_1.default.destroyProduct);
router.put("/products/edit-product/:id", upload.single("imgUpload"), admin_controller_1.default.updateProduct);
router.get("/products/edit-product/:id", admin_controller_1.default.editProduct);
router.get("/products/view/:id", admin_controller_1.default.viewCar);
router.get("/products/add-product/", admin_controller_1.default.createProduct);
// router.get("/products", adminController.products);
// checkMiddlerWares.checkIsAdmin,
router.get("/", admin_controller_1.default.products);
// router.get("/table-bill", manageInvoiceController.listBills);
// router.get("/billDetail/:id", manageInvoiceController.billDetail);
// router.get("/edit-bill/:id", manageInvoiceController.editBill);
// router.put("/edit-bill/:id", manageInvoiceController.updateBill);
exports.default = router;
