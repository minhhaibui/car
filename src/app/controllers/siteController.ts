import { Request, Response, NextFunction } from "express";
import { Chart } from "chart.js";
import { Canvas, createCanvas, CanvasRenderingContext2D } from "canvas";

import MysqlDataSource from "../../config/db";
import { Products } from "../models/products.entity";
import { Categories } from "../models/categories.entity";
const categoryRepository = MysqlDataSource.getRepository(Categories);
const productsRepository = MysqlDataSource.getRepository(Products);
class siteController {
  async products(req: Request, res: Response, next: NextFunction) {
    let data = res.locals.data;
    const results = await MysqlDataSource.manager.find(Products);

    const product2 = await MysqlDataSource.getRepository(Products)
      .createQueryBuilder("Products")
      .where("Products.categoriesId = :categoriesId", { categoriesId: 2 })
      .getMany();
    const product3 = await MysqlDataSource.getRepository(Products)
      .createQueryBuilder("Products")
      .where("Products.categoriesId = :categoriesId", { categoriesId: 1 })
      .getMany();

    data = {
      products1: results,
      products2: product2,
      products3: product3,
    };
    res.render("main/home", {
      title: "Home",
      layout: "main",
      data: data,
    });
  }

  async datxemxe(req: Request, res: Response, next: NextFunction) {
    res.render("main/datxemxe", {
      title: "Home",
      layout: "main",
    });
  }
  async chitietsosanh(req: Request, res: Response, next: NextFunction) {
    res.render("main/chitietsosanh", {
      title: "Home",
      layout: "main",
    });
  }
}

export default new siteController();
