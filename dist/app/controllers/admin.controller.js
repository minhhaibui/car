"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../config/db"));
const products_entity_1 = require("../models/products.entity");
("../models/Test");
const productsRepository = db_1.default.getRepository(products_entity_1.Products);
class adminController {
    async products(req, res, next) {
        const results = await productsRepository
            .find()
            .then((product) => {
            res.render("admin/products/table-data-product", {
                title: "Admin",
                layout: "admin",
                product: product,
            });
        })
            .catch(next);
    }
    async createProduct(req, res, next) {
        res.render("admin/products/form-add-product", {
            title: "add product",
            layout: "admin",
        });
    }
    async storeProduct(req, res, next) {
        // res.json(req.body);
        const product = new products_entity_1.Products();
        product.tenxe = req.body.tenxe;
        product.hangxe = req.body.hangxe;
        product.giaban = req.body.giaban;
        product.nhienlieu = req.body.nhienlieu;
        product.hopso = req.body.hopso;
        product.socho = req.body.socho;
        product.mausac = req.body.mausac;
        product.kieudang = req.body.kieudang;
        product.tinhtrang = req.body.tinhtrangxe;
        product.namsanxuat = req.body.namsanxuat;
        product.img = req.file?.filename || req.body.imgUpload;
        product
            .save()
            .then(() => {
            res.redirect("/admin");
        })
            .catch(next);
    }
    async viewCar(req, res, next) {
        const results = await productsRepository
            .createQueryBuilder("products")
            .where("products.id = :id", {
            id: req.params.id,
        })
            .getOne()
            .then((detailProduct) => {
            res.render("admin/products/view", {
                title: "detail product",
                layout: "admin",
                product: detailProduct,
            });
            // res.json(detailProduct);
        })
            .catch(next);
    }
    //updateProduct
    async editProduct(req, res, next) {
        const results = await productsRepository
            .createQueryBuilder("products")
            .where("products.id = :id", {
            id: req.params.id,
        })
            .getOne()
            .then((detailProduct) => {
            res.render("admin/products/update", {
                title: "detail product",
                layout: "admin",
                product: detailProduct,
            });
            // res.json(detailProduct);
        })
            .catch(next);
    }
    async updateProduct(req, res, next) {
        await productsRepository
            .createQueryBuilder("products")
            .update()
            .set({
            tenxe: req.body.tenxe,
            hangxe: req.body.hangxe,
            giaban: req.body.giaban,
            nhienlieu: req.body.nhienlieu,
            hopso: req.body.hopso,
            socho: req.body.socho,
            mausac: req.body.mausac,
            kieudang: req.body.kieudang,
            tinhtrang: req.body.tinhtrangxe,
            namsanxuat: req.body.namsanxuat,
            img: req.file?.filename || req.body.imgUpload,
        })
            .where("products.id = :id", { id: req.params.id })
            .execute();
        res.redirect("/admin");
    }
    async destroyProduct(req, res, next) {
        await db_1.default.getRepository(products_entity_1.Products)
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id: req.query.id })
            .execute();
        res.redirect("/admin");
    }
}
exports.default = new adminController();
