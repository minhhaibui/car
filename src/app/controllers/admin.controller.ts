import { Request, Response, NextFunction } from "express";
import MysqlDataSource from "../../config/db";
import { Chart } from "chart.js";
import { Test } from "../models/test.entity";
import { Categories } from "../models/categories.entity";
import { Products } from "../models/products.entity";
import { User } from "../models/user.entity";
import slugify from "slugify";
import { Bills } from "../models/bills.entity";
import { DetailsProduct } from "../models/detail_productsordered.entity";
import { time } from "console";
("../models/Test");
const productsRepository = MysqlDataSource.getRepository(Products);

class adminController {
  async products(req: Request, res: Response, next: NextFunction) {
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

  async createProduct(req: Request, res: Response, next: NextFunction) {
    res.render("admin/products/form-add-product", {
      title: "add product",
      layout: "admin",
    });
  }

  async storeProduct(req: Request, res: Response, next: NextFunction) {
    // res.json(req.body);
    const product = new Products();
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

  async viewCar(req: Request, res: Response, next: NextFunction) {
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
  async editProduct(req: Request, res: Response, next: NextFunction) {
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
  async updateProduct(req: Request, res: Response, next: NextFunction) {
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

  async destroyProduct(req: Request, res: Response, next: NextFunction) {
    await MysqlDataSource.getRepository(Products)
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: req.query.id })
      .execute();
    res.redirect("/admin");
  }

  //category
}

export default new adminController();
